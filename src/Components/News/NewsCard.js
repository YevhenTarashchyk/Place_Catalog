import React, { Component } from "react";
import { InfoConsumer } from "../../Context/context";

class NewsCard extends Component {
  render() {
    const { id, newsTitle, newsText } = this.props.item;
    return (
      <InfoConsumer>
        {value => (
          <div className="card container mt-2 mb-3 p-5">
            <div key={id} className="card-body">
              <h5 className="card-title">{newsTitle}</h5>
              <p className="card-text">{newsText}</p>
              <a className="card-link" href="/">
                Read More >>
              </a>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default NewsCard;
