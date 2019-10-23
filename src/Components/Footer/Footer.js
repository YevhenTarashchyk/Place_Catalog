import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 d-flex  justify-content-center">
            <div>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Ukraine</li>
                <li>Some st.</li>
                <li>phone: 07534X4742</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex  justify-content-center">
            <div>
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex  justify-content-center">
            <div>
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 d-flex  justify-content-center">
            <div>
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App - All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
