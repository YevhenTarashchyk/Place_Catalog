import React, { Component } from "react";

import { InfoConsumer } from "../../Context/context";
import Reviews from "../Reviews/Reviews";
import "./styles/details.scss";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            headerTitle,
            headerSubTitle,
            headerText,
            title,
            description,
            img,
            maps
          } = data.detailInfo;
          return (
            <>
              <div className="container-fluid align-items-center details_header">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h3 className="display-3">{headerSubTitle}</h3>
                <p>{headerText}</p>
                <div className="container social__icons">
                  <div className="row justify-content-between">
                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className="icons__icon">
                        <a href="https://www.facebook.com">
                          <i
                            className="fab fa-facebook fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>

                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className="icons__icon">
                        <a href="https://twitter.com/">
                          <i
                            className="fab fa-twitter fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className=" icons__icon">
                        <a href="https://www.instagram.com">
                          <i
                            className="fab fa-instagram fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className="icons__icon">
                        <a href="https://www.youtube.com">
                          <i
                            className="fab fa-youtube fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className="icons__icon">
                        <a href="https://support.google.com">
                          <i
                            className="fab fa-google-plus fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-center mb-4">
                      <div className="icons__icon">
                        <a href="https://www.reddit.com">
                          <i
                            className="fab fa-reddit-alien fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="about-tab"
                      data-toggle="tab"
                      href="#about"
                      role="tab"
                      aria-controls="about"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="map-tab"
                      data-toggle="tab"
                      href="#map"
                      role="tab"
                      aria-controls="map"
                      aria-selected="false"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                <div className="tab-content mb-5" id="myTabContent">
                  <div
                    className="tab-pane fade show active text-center mt-3"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <div
                      className="details_img"
                      style={{
                        background: `url(${img}) center/cover no-repeat`
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <Reviews />
                  </div>
                  <div
                    className="tab-pane fade mt-3"
                    id="map"
                    role="tabpanel"
                    aria-labelledby="map-tab"
                  >
                    <iframe
                      title="infoFrame"
                      src={maps}
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameborder: "0"
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;
