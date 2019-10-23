import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

import initialState from "../Slider/slider_data";
import "./Slider.scss";

const CarouselUI = ({ position, handleClick, children, total }) => (
  <div className="slider-wrapper">
    {children}
    <div
      onClick={handleClick}
      data-position={position - 1}
      className="backArrow"
    >
      <i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
    </div>
    <div
      onClick={handleClick}
      data-position={position + 1}
      className="nextArrow"
    >
      <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
    </div>
    <div className="dots-wrapper">
      {Array(...Array(total)).map((val, index) => (
        <div
          key={index}
          onClick={handleClick}
          data-position={index}
          className="dot"
        >
          {index === position ? <Flash>● </Flash> : "○ "}
        </div>
      ))}
    </div>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

const slides = [].concat(initialState.slides);

export default class Slider extends Component {
  state = {
    ...initialState,
    slides
  };

  render() {
    const { slides } = this.state;
    return (
      <Carousel defaultWait={10000} swipe={true} forever maxTurns={0}>
        {slides.map((item, index) => (
          <Slide key={index} right>
            <div className="slide-container">
              <div
                className="slide"
                style={{
                  background: `url(${item.image}) 50% 30%/cover no-repeat`
                }}
              >
                <div className="inner">
                  <Fade top delay={500} duration={1200}>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Zoom delay={1000} duration={1500}>
                    <h3>{item.description}</h3>
                  </Zoom>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </Carousel>
    );
  }
}
