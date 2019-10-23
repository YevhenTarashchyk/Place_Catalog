import React, { Component } from "react";
import { InfoConsumer } from "../../Context/context";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import "./info.scss";

class Info extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img
    } = this.props.item;
    return (
      <InfoConsumer>
        {value => (
          <div
            className="col-10 col-md-6 col-lg-4 mx-auto mb-5 wow bounceIn "
            data-wow-offset={500}
            data-wow-delay={500}
            data-wow-duration={1000}
          >
            <div className="card">
              <div
                className="card_img"
                style={{
                  background: `url(${img}) 50% 40%/cover no-repeat`
                }}
              />
              <div className="card-body">
                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                <h5 className="card-title text-uppercase">{headerSubTitle}</h5>
                <p className="card-text">{headerText}</p>

                <Link
                  onClick={() => value.handleDetail(id)}
                  to="/details"
                  className="btn btn-outline-primary text-uppercase"
                >
                  More info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default Info;
