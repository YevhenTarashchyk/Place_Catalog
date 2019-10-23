import React, { Component } from "react";
import NewsCard from "../News/NewsCard";
import { InfoConsumer } from "../../Context/context";

class About extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.news.map(item => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default About;
