import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const Portfolio: React.FC = () => {
    return (
        <Layout>
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
                        <div className="col-lg-5">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-vert mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/1.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Branding</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Interior design studio</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="60" data-value-2="-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/2.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Design</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Home Security Camera</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="60" data-value-2="-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/3.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Design</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Kemia Honest Skincare</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-5">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-vert mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/4.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Photography</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Cascade of Lava</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-5">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-vert mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/5.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Design</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Air Pro by Molekule</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/portfolio" className="mil-portfolio-item mil-more mil-parallax mil-mb-60" data-value-1="60" data-value-2="-60">
                                <div className="mil-cover-frame mil-hori mil-up">
                                    <div className="mil-cover">
                                        <img src="/assets/img/works/6.jpg" alt="cover" />
                                    </div>
                                </div>
                                <div className="mil-descr">
                                    <div className="mil-labels mil-up mil-mb-15">
                                        <div className="mil-label mil-upper mil-accent">Design</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up">Tony's Chocolonely</h4>
                                </div>
                            </Link>
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
