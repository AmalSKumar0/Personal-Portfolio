import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
    return (
        <Layout>
            <SEO title="Contact" description="Get in touch with Amal S Kumar for your next web development project. Based in Kochi, Kerala." />
            {/* banner */}
            <div className="mil-inner-banner mil-p-0-120">
                <div className="mil-banner-content mil-center mil-up">
                    <div className="container">
                        <ul className="mil-breadcrumbs mil-center mil-mb-60">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <h1 className="mil-mb-60">Get in touch!</h1>
                        <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                            <span>Send message</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* map */}
            <div className="mil-map-frame mil-up">
                <div className="mil-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.71616900693!2d76.13612503259976!3d9.98233379963278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            {/* map end */}

            {/* contact form */}
            <section id="contact">
                <div className="container mil-p-120-90">
                    <h3 className="mil-center mil-up mil-mb-120">Let's <span className="mil-thin">Talk</span></h3>
                    <form className="row align-items-center">
                        <div className="col-lg-6 mil-up">
                            <input type="text" placeholder="What's your name" />
                        </div>
                        <div className="col-lg-6 mil-up">
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="col-lg-12 mil-up">
                            <textarea placeholder="Tell us about our project"></textarea>
                        </div>
                        <div className="col-lg-8">
                            <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-adaptive-right mil-up mil-mb-30">
                                <button type="submit" className="mil-button mil-arrow-place">
                                    <span>Send message</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* contact form end */}

            <Footer />
        </Layout>
    );
};
