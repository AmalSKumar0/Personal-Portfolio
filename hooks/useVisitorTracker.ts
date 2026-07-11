import { useEffect } from 'react';

export const useVisitorTracker = () => {
    useEffect(() => {
        const trackVisitor = async () => {
            // Anti-spam: Check session storage
            if (sessionStorage.getItem('visit_notified')) {
                return;
            }

            const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
            const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
            const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;

            if (!botToken || !chatId) return;

            // 1. Local bot check to quickly ignore obvious automated traffic without hitting Groq API
            const isLocalBot = () => {
                if (navigator.webdriver) return true;
                const ua = navigator.userAgent.toLowerCase();
                const botKeywords = [
                    'bot', 'spider', 'crawler', 'headless', 'lighthouse', 'inspect',
                    'curl', 'wget', 'python', 'http', 'node', 'scrap', 'phantom',
                    'selenium', 'puppeteer', 'playwright', 'cyber', 'scan'
                ];
                if (botKeywords.some(keyword => ua.includes(keyword))) {
                    return true;
                }
                if (window.screen.width === 0 || window.screen.height === 0) {
                    return true;
                }
                return false;
            };

            if (isLocalBot()) {
                console.log('Visitor tracking: local heuristic detected bot, ignoring.');
                return;
            }

            try {
                // 2. Fetch geolocation data from ipapi.co (which includes IP, city, region, country, and org/ISP)
                let geoData: any = {};
                let ipAddress = 'Unknown';
                let locationString = 'Unknown Location';
                let ispString = 'Unknown ISP';

                try {
                    const geoRes = await fetch('https://ipapi.co/json/');
                    if (geoRes.ok) {
                        geoData = await geoRes.json();
                        ipAddress = geoData.ip || 'Unknown';
                        const city = geoData.city || '';
                        const region = geoData.region || '';
                        const country = geoData.country_name || '';
                        locationString = [city, region, country].filter(Boolean).join(', ') || 'Unknown Location';
                        ispString = geoData.org || 'Unknown ISP';
                    } else {
                        throw new Error('ipapi.co failed');
                    }
                } catch (geoError) {
                    console.error('Failed to fetch geolocation from ipapi.co, falling back to ipify:', geoError);
                    try {
                        const ipRes = await fetch('https://api.ipify.org?format=json');
                        const ipData = await ipRes.json();
                        ipAddress = ipData.ip;
                    } catch (ipError) {
                        console.error('Failed to fetch fallback IP:', ipError);
                    }
                }

                // 3. Setup client metadata for Groq classification
                const clientMetadata = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    language: navigator.language || 'Unknown',
                    languages: navigator.languages || [],
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                    ip: ipAddress,
                    location: locationString,
                    isp: ispString,
                    webdriver: navigator.webdriver
                };

                let isBot = false;
                let deviceDescription = navigator.platform || 'Unknown Device';
                let browserDescription = 'Unknown Browser';

                // 4. Perform Groq AI classification if API key is present
                if (groqApiKey) {
                    try {
                        const systemPrompt = `You are a bot detection security system. Analyze the visitor's metadata to determine if they are a real human user visiting the portfolio site, or a bot/crawler/uptime monitor/automated script/scraper.

Provide your response strictly as a JSON object with the following fields:
{
  "isBot": boolean,
  "confidence": number (between 0.0 and 1.0),
  "device": "concise description of the user device/OS, e.g. iPhone, Windows PC, MacBook, Android Phone, Linux Desktop",
  "browser": "concise description of the browser, e.g. Safari, Chrome, Firefox, Edge",
  "reason": "brief reason for your bot detection verdict"
}
Do not return any markdown formatting, code blocks, or extra text. Return ONLY the JSON object.`;

                        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${groqApiKey}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                messages: [
                                    { role: 'system', content: systemPrompt },
                                    { role: 'user', content: JSON.stringify(clientMetadata) }
                                ],
                                model: 'llama-3.1-8b-instant',
                                temperature: 0.1,
                                response_format: { type: 'json_object' }
                            })
                        });

                        if (response.ok) {
                            const resData = await response.json();
                            const aiText = resData.choices?.[0]?.message?.content || '';
                            let parsedResult;
                            try {
                                parsedResult = JSON.parse(aiText);
                            } catch (e) {
                                // Fallback sanitation in case of code block wrap
                                let cleanText = aiText.trim();
                                if (cleanText.startsWith('```')) {
                                    cleanText = cleanText.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
                                }
                                parsedResult = JSON.parse(cleanText);
                            }

                            if (parsedResult) {
                                isBot = !!parsedResult.isBot;
                                deviceDescription = parsedResult.device || deviceDescription;
                                browserDescription = parsedResult.browser || browserDescription;
                                console.log('Visitor tracking Groq verdict:', parsedResult);
                            }
                        } else {
                            console.error('Groq API error status:', response.status);
                        }
                    } catch (groqError) {
                        console.error('Groq bot detection failed, falling back to false:', groqError);
                    }
                } else {
                    // If no Groq API Key is configured, we extract standard browser/device from UA
                    console.warn('VITE_GROQ_API_KEY is not set. Skipping AI bot detection.');
                    const parseUA = () => {
                        const ua = navigator.userAgent;
                        let browser = 'Unknown Browser';
                        let device = navigator.platform || 'Unknown Device';

                        if (ua.includes('Firefox')) browser = 'Firefox';
                        else if (ua.includes('Chrome')) browser = 'Chrome';
                        else if (ua.includes('Safari')) browser = 'Safari';
                        else if (ua.includes('Edge')) browser = 'Edge';

                        if (/iPad|iPhone|iPod/.test(ua)) device = 'iPhone/iPad';
                        else if (/Android/.test(ua)) device = 'Android Device';
                        else if (/Macintosh/.test(ua)) device = 'MacBook/Mac';
                        else if (/Windows/.test(ua)) device = 'Windows PC';
                        else if (/Linux/.test(ua)) device = 'Linux PC';

                        return { browser, device };
                    };
                    const parsed = parseUA();
                    deviceDescription = parsed.device;
                    browserDescription = parsed.browser;
                }

                // 5. If classified as bot, skip sending message
                if (isBot) {
                    console.log('Visitor classified as bot by Groq. Ignoring visit notification.');
                    return;
                }

                // 6. Format minimal Telegram notification
                const formatTime = (date: Date) => {
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const day = date.getDate();
                    const month = months[date.getMonth()];
                    const year = date.getFullYear();
                    let hours = date.getHours();
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
                };

                const message = `📍 Visitor from ${locationString}
📱 ${deviceDescription} • ${browserDescription}
🌐 IP: ${ipAddress}
🏢 ISP: ${ispString}
⏰ ${formatTime(new Date())}`;

                // Send to Telegram (without parse_mode to ensure plain text delivery without markdown issues)
                await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message
                    }),
                });

                // Mark session as notified
                sessionStorage.setItem('visit_notified', 'true');

            } catch (error) {
                console.error('Visitor tracking failed:', error);
            }
        };

        trackVisitor();
    }, []);
};
