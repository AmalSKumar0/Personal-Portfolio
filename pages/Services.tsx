import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
    return (
        <Layout>
            {/* banner */}
            <div className="mil-dark-bg">
                <div className="mil-inner-banner">
                    <div className="mi-invert-fix">
                        <div className="mil-banner-content mil-up">
                            <div className="mil-animation-frame">
                                <div className="mil-animation mil-position-4 mil-scale" data-value-1="6" data-value-2="1.4"></div>
                            </div>
                            <div className="container">
                                <ul className="mil-breadcrumbs mil-light mil-mb-60">
                                    <li><Link to="/">Homepage</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                </ul>
                                <h1 className="mil-muted mil-mb-60">This is <span className="mil-thin">what</span><br /> we do <span className="mil-thin">best</span></h1>
                                <a href="#services" className="mil-link mil-accent mil-arrow-place mil-down-arrow">
                                    <span>Our services</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner end */}

                {/* services */}
                <section id="services">
                    <div className="mi-invert-fix">
                        <div className="container mil-p-120-60">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="mil-lines-place mil-light"></div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <Link to="/services" className="mil-service-card-lg mil-more mil-accent-cursor mil-offset">
                                                <h4 className="mil-muted mil-up mil-mb-30">Branding and <br />Identity Design</h4>
                                                <p className="mil-descr mil-light-soft mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                                <ul className="mil-service-list mil-light mil-mb-30">
                                                    <li className="mil-up">UX Audits</li>
                                                    <li className="mil-up">Design thinking</li>
                                                    <li className="mil-up">Methodologies</li>
                                                    <li className="mil-up">Wireframing</li>
                                                </ul>
                                                <div className="mil-link mil-accent mil-arrow-place mil-up">
                                                    <span>Read more</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <Link to="/services" className="mil-service-card-lg mil-more mil-accent-cursor">
                                                <h4 className="mil-muted mil-up mil-mb-30">Website Design <br />and Development</h4>
                                                <p className="mil-descr mil-light-soft mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                                <ul className="mil-service-list mil-light mil-mb-30">
                                                    <li className="mil-up">UX Audits</li>
                                                    <li className="mil-up">Design thinking</li>
                                                    <li className="mil-up">Methodologies</li>
                                                    <li className="mil-up">Wireframing</li>
                                                </ul>
                                                <div className="mil-link mil-accent mil-arrow-place mil-up">
                                                    <span>Read more</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <Link to="/services" className="mil-service-card-lg mil-more mil-accent-cursor mil-offset">
                                                <h4 className="mil-muted mil-up mil-mb-30">Advertising and <br />Marketing Campaigns</h4>
                                                <p className="mil-descr mil-light-soft mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                                <ul className="mil-service-list mil-light mil-mb-30">
                                                    <li className="mil-up">UX Audits</li>
                                                    <li className="mil-up">Design thinking</li>
                                                    <li className="mil-up">Methodologies</li>
                                                    <li className="mil-up">Wireframing</li>
                                                </ul>
                                                <div className="mil-link mil-accent mil-arrow-place mil-up">
                                                    <span>Read more</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <Link to="/services" className="mil-service-card-lg mil-more mil-accent-cursor">
                                                <h4 className="mil-muted mil-up mil-mb-30">Creative Consulting <br />Concept Development</h4>
                                                <p className="mil-descr mil-light-soft mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                                <ul className="mil-service-list mil-light mil-mb-30">
                                                    <li className="mil-up">UX Audits</li>
                                                    <li className="mil-up">Design thinking</li>
                                                    <li className="mil-up">Methodologies</li>
                                                    <li className="mil-up">Wireframing</li>
                                                </ul>
                                                <div className="mil-link mil-accent mil-arrow-place mil-up">
                                                    <span>Read more</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services end */}

                {/* call to action */}
                <section className="mil-soft-bg">
                    <div className="container mil-p-120-120">
                        <div className="row">
                            <div className="col-lg-10">
                                <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">Looking to make your mark? We'll help you turn <br /> your project into a success story.</span>
                            </div>
                        </div>
                        <div className="mil-center">
                            <h2 className="mil-up mil-mb-60">Let’s make an <span className="mil-thin">impact</span><br /> together. Ready <span className="mil-thin">when you are</span></h2>
                            <div className="mil-up"><Link to="/contact" className="mil-button mil-arrow-place"><span>Contact us</span></Link></div>
                        </div>
                    </div>
                </section>
                {/* call to action end */}

                <Footer />
            </div>
        </Layout>
    );
};
