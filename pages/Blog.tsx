import React from 'react';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Blog: React.FC = () => {
    return (
        <Layout>
            <SEO title="Blog" description="Tech insights and updates from Amal S Kumar." />
            {/* banner */}
            <div className="mil-inner-banner mil-p-0-120">
                <div className="mil-banner-content mil-up">
                    <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
                    </div>
                    <div className="container">
                        <ul className="mil-breadcrumbs mil-mb-60">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                        <h1 className="mil-mb-60">Exploring <span className="mil-thin">the World</span> <br /> Through Our <span className="mil-thin">Blog</span></h1>
                        <a href="#blog" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
                            <span>Publications</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* popular */}
            <section className="mil-soft-bg" id="blog">
                <div className="container mil-p-120-60">
                    <div className="row align-items-center mil-mb-30">
                        <div className="col-lg-6 mil-mb-30">
                            <h3 className="mil-up">Popular Publications:</h3>
                        </div>
                        <div className="col-lg-6 mil-mb-30">
                            <div className="mil-adaptive-right mil-up">
                                <Link to="/blog" className="mil-link mil-dark mil-arrow-place">
                                    <span>View all</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Link to="/blog" className="mil-blog-card mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/1.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">How to Become a Graphic Designer in 10 Simple Steps</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/blog" className="mil-blog-card mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/2.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">16 Best Graphic Design Online and Offline Courses</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* popular end */}

            {/* blog */}
            <section>
                <div className="container mil-p-120-120">
                    <div className="row align-items-center mil-mb-30">
                        <div className="col-lg-4 mil-mb-30">
                            <h3 className="mil-up">Categories:</h3>
                        </div>
                        <div className="col-lg-8 mil-mb-30">
                            <div className="mil-adaptive-right mil-up">
                                <ul className="mil-category-list">
                                    <li><Link to="/blog">Design</Link></li>
                                    <li><Link to="/blog">Art</Link></li>
                                    <li><Link to="/blog">Code</Link></li>
                                    <li><Link to="/blog">Technology</Link></li>
                                    <li><Link to="/blog" className="mil-active">All categories</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link to="/blog" className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/3.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">How to Create a Brand Guide for Your Client</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-12">
                            <Link to="/blog" className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/4.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">Color Psychology in Art and Design</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-12">
                            <Link to="/blog" className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/5.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">How to Design a Repeating Pattern</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-12">
                            <Link to="/blog" className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src="/assets/img/blog/6.jpg" alt="cover" />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                                        <div className="mil-label mil-upper">may 24 2023</div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">How to Never Reach Creative Burnout</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-12">
                            <div className="mil-pagination">
                                <Link to="/blog" className="mil-pagination-btn mil-active">1</Link>
                                <Link to="/blog" className="mil-pagination-btn">2</Link>
                                <Link to="/blog" className="mil-pagination-btn">3</Link>
                                <Link to="/blog" className="mil-pagination-btn">4</Link>
                                <Link to="/blog" className="mil-pagination-btn">5</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog end */}

            {/* call to action */}
            <section className="mil-soft-bg">
                <div className="container mil-p-120-120">
                    <div className="row">
                        <div className="col-lg-10">
                            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">Looking to make your mark? We'll help you turn <br /> your project into a success story.</span>
                        </div>
                    </div>
                    <div className="mil-center">
                        <h2 className="mil-up mil-mb-60">Stay up-to-date <span className="mil-thin">with the</span><br /> latest news by <span className="mil-thin">subscribing</span><br /> to our <span className="mil-thin">newsletter!</span></h2>
                        <div className="row justify-content-center mil-up">
                            <div className="col-lg-4">
                                <form className="mil-subscribe-form mil-subscribe-form-2 mil-up">
                                    <input type="text" placeholder="Enter our email" />
                                    <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place"></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            <Footer />
        </Layout>
    );
};
