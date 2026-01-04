import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <div className="mil-menu-frame">
      {/* frame clone */}
      <div className="mil-frame-top">
        <Link to="/" className="mil-logo">A.</Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      {/* frame clone end */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  <li className="mil-has-children mil-active">
                    <Link to="/">Homepage</Link>
                    <ul>
                      <li><Link to="/">Landing page</Link></li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <Link to="/portfolio">Portfolio</Link>
                    <ul>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <Link to="/services">Services</Link>
                    <ul>
                      <li><Link to="/services">Services List</Link></li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <Link to="/blog">Newsletter</Link>
                    <ul>
                      <li><Link to="/blog">Blog List</Link></li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <Link to="/contact">Other pages</Link>
                    <ul>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-animation-in">
                  <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                  </div>
                </div>
                <div className="mil-menu-right">
                  <div className="row">
                    <div className="col-lg-8 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Projects</h6>
                      <ul className="mil-menu-list">
                        <li><Link to="/portfolio" className="mil-light-soft">Interior design studio</Link></li>
                        <li><Link to="/portfolio" className="mil-light-soft">Home Security Camera</Link></li>
                        <li><Link to="/portfolio" className="mil-light-soft">Kemia Honest Skincare</Link></li>
                        <li><Link to="/portfolio" className="mil-light-soft">Cascade of Lava</Link></li>
                        <li><Link to="/portfolio" className="mil-light-soft">Air Pro by Molekule</Link></li>
                        <li><Link to="/portfolio" className="mil-light-soft">Tony's Chocolonely</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Useful links</h6>
                      <ul className="mil-menu-list">
                        <li><a href="#." className="mil-light-soft">Privacy Policy</a></li>
                        <li><a href="#." className="mil-light-soft">Terms and conditions</a></li>
                        <li><a href="#." className="mil-light-soft">Cookie Policy</a></li>
                        <li><a href="#." className="mil-light-soft">Careers</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-mb-60"></div>
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Canada</h6>
                      <p className="mil-light-soft mil-up">71 South Los Carneros Road, California <span className="mil-no-wrap">+51 174 705 812</span></p>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Germany</h6>
                      <p className="mil-light-soft">Leehove 40, 2678 MC De Lier, Netherlands <span className="mil-no-wrap">+31 174 705 811</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
