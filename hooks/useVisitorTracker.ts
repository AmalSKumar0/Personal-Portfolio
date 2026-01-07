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

            if (!botToken || !chatId) return;

            try {
                // Fetch IP
                const ipRes = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipRes.json();
                const ipAddress = ipData.ip;

                // Gather Metadata
                const message = `
🔔 *New Details Detected!*

🌍 *IP:* \`${ipAddress}\`
📱 *OS:* ${navigator.platform}
🌐 *Browser:* ${navigator.userAgent}
📏 *Screen:* ${window.screen.width}x${window.screen.height}
⏰ *Time:* ${new Date().toLocaleString()}
                `;

                // Send to Telegram
                await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'Markdown',
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
