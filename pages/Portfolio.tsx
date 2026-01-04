import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Portfolio: React.FC = () => {
    return (
        <Layout>
            <SEO title="Portfolio" description="My Projects - Email Bots, Taxi Booking Apps, API Services, and more built with Python and React." />
            {/* banner */}
            <div className="mil-inner-banner">
                <div className="mil-banner-content mil-up">
                    <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
                    </div>
                    <div className="container">
                        <ul className="mil-breadcrumbs mil-mb-60">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                        <h1 className="mil-mb-60">Designing a <br /> Better <span className="mil-thin">World Today</span></h1>
                        <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                            <span>Our works</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* portfolio */}
            <section id="portfolio">
                <div className="container mil-portfolio mil-p-120-60">
                    <div className="mil-lines-place"></div>
                    <div className="mil-lines-place mil-lines-long"></div>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/projects/email_bot.png" alt="EmailToTelegramBot" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Python</div>
                                        <div className="mil-label mil-upper">AI</div>
                                    </div>
                                    <h4 className="mil-up">EmailToTelegramBot</h4>
                                    <p className="mil-up">A bot that forwards unread emails to Telegram and uses AI to generate concise summaries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/projects/ridenow.png" alt="RideNow" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Django</div>
                                        <div className="mil-label mil-upper">SQLite</div>
                                    </div>
                                    <h4 className="mil-up">RideNow</h4>
                                    <p className="mil-up">Multi-vehicle taxi booking application designed for efficient ride management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/projects/pincode_api.png" alt="Pincode API" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Python</div>
                                        <div className="mil-label mil-upper">API</div>
                                    </div>
                                    <h4 className="mil-up">Pincode API</h4>
                                    <p className="mil-up">A dedicated API service for retrieving and validating location data based on pincodes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/projects/portfolio.png" alt="Portfolio" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Django</div>
                                        <div className="mil-label mil-upper">HTML</div>
                                    </div>
                                    <h4 className="mil-up">AmalSKumar Portfolio</h4>
                                    <p className="mil-up">A personal portfolio website built with Python Django to showcase projects and skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio end */}

            {/* call to action */}
            <section className="mil-soft-bg">
                <div className="container mil-p-120-120">
                    <div className="row">
                        <div className="col-lg-10">
                            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">Looking to make your mark? We'll help you turn <br /> your project into a success story.</span>
                        </div>
                    </div>
                    <div className="mil-center">
                        <h2 className="mil-up mil-mb-60">Ready to bring your <span className="mil-thin">ideas to</span> life? <br /> We're <span className="mil-thin">here to help</span></h2>
                        <div className="mil-up"><Link to="/contact" className="mil-button mil-arrow-place"><span>Contact us</span></Link></div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            <Footer />
        </Layout>
    );
};
