import "../css/Footer.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <footer id="footer" className="footer-1 footer-container">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  ZenithSky<span></span>
                </h5>
                <p>About the company, little discription will goes here.. </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Get Started</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Top Leaders</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Success Stories</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Event/Tickets</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">News</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Lifestyle</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">About</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Get Started<span></span>
                </h5>
                <p>Get access to your full Training and Marketing Suite.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>

                <p>
                  <a href="mailto:hello@zenith.com" title="Zenith">
                    hello@zenift.io
                  </a>
                </p>
                <ul className="social-footer2">
                  <li className="">
                    <a
                      title="youtube"
                      target="_blank"
                      href="https://bit.ly/3m9avif"
                    >
                      YT
                    </a>
                  </li>

                  <li className="">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      FB
                    </a>
                  </li>

                  <li className="">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      title="Twitter"
                    >
                      TT
                    </a>
                  </li>

                  <li className="">
                    <a
                      title="instagram"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      IG
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Zenith © 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
