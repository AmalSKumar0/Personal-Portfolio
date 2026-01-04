import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <Layout>
            <section className="mil-banner mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
                        <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
                        <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
                    </div>

                    <div className="mil-gradient"></div>

                    <div className="container">
                        <div className="mil-banner-content mil-up">

                            <h1 className="mil-muted mil-mb-60">Designing <span className="mil-thin">a Better</span><br /> World <span className="mil-thin">Today</span></h1>
                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60">Welcome to our world of endless imagination and boundless creativity. Together, let's embark on a remarkable journey where dreams become tangible realities.</p>
                                </div>
                            </div>

                            <Link to="/services" className="mil-button mil-arrow-place mil-btn-space">
                                <span>What we do</span>
                            </Link>

                            <Link to="/portfolio" className="mil-link mil-muted mil-arrow-place">
                                <span>View works</span>
                            </Link>

                            <div className="mil-circle-text">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                                    <defs>
                                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                    </defs>
                                    <circle cx="150" cy="100" r="75" fill="none" />
                                    <g>
                                        <use xlinkHref="#circlePath" fill="none" />
                                        <text style={{ letterSpacing: '6.5px' }}>
                                            <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                                        </text>
                                    </g>
                                </svg>
                                <a href="#about" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container mil-p-120-30">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-xl-5">

                            <div className="mil-mb-90">
                                <h2 className="mil-up mil-mb-60">Discover <br />Our <span className="mil-thin">Studio</span></h2>
                                <p className="mil-up mil-mb-30">At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.</p>

                                <p className="mil-up mil-mb-60">Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.</p>

                                <div className="mil-about-quote">
                                    <div className="mil-avatar mil-up">
                                        <img src="/assets/img/faces/customers/2.jpg" alt="Founder" />
                                    </div>
                                    <h6 className="mil-quote mil-up">Passionately Creating <span className="mil-thin">Design Wonders:</span> Unleashing <span className="mil-thin">Boundless Creativity</span></h6>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">

                            <div className="mil-about-photo mil-mb-90">
                                <div className="mil-lines-place"></div>
                                <div className="mil-up mil-img-frame" style={{ paddingBottom: '160%' }}>
                                    <img src="/assets/img/photo/1.jpg" alt="img" className="mil-scale" data-value-1="1" data-value-2="1.2" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: '300px', right: '-100px' }}></div>
                        <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: '150px' }}></div>
                    </div>
                    <div className="container mil-p-120-0">

                        <div className="mil-mb-120">
                            <div className="row">
                                <div className="col-lg-10">
                                    <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">Professionals focused on helping your brand<br /> grow and move forward.</span>
                                </div>
                            </div>

                            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                                <span className="mil-text-image"><img src="/assets/img/photo/2.jpg" alt="team" /></span>
                                <h2 className="mil-h1 mil-muted mil-center">Unique <span className="mil-thin">Ideas</span></h2>
                            </div>
                            <div className="mil-complex-text justify-content-center mil-up">
                                <h2 className="mil-h1 mil-muted mil-center">For Your <span className="mil-thin">Business.</span></h2>
                                <Link to="/services" className="mil-services-button mil-button mil-arrow-place"><span>What we do</span></Link>
                            </div>
                        </div>

                        <div className="row mil-services-grid m-0">
                            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                                <Link to="/service" className="mil-service-card-sm mil-up">
                                    <h5 className="mil-muted mil-mb-30">Branding and <br />Identity Design</h5>
                                    <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                                <Link to="/service" className="mil-service-card-sm mil-up">
                                    <h5 className="mil-muted mil-mb-30">Website Design <br />and Development</h5>
                                    <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                                <Link to="/service" className="mil-service-card-sm mil-up">
                                    <h5 className="mil-muted mil-mb-30">Advertising and <br />Marketing Campaigns</h5>
                                    <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                                <Link to="/service" className="mil-service-card-sm mil-up">
                                    <h5 className="mil-muted mil-mb-30">Creative Consulting <br />and Development</h5>
                                    <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Layout>
    );
};
