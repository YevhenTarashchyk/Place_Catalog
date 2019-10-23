import React, { Component } from "react";
import { placeInfo, reviews, news, detailInfo } from "../MockData/data";

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    placeInfo,
    reviews,
    news,
    detailInfo
  };

  getItem = id => {
    const item = this.state.placeInfo.find(item => item.id === id);
    return item;
  };

  handleDetail = id => {
    const item = this.getItem(id);
    this.setState(() => {
      return {
        detailInfo: item
      };
    });
  };
  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.placeInfo,
          reviews: this.state.reviews,
          news: this.state.news,
          detailInfo: this.state.detailInfo,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

export const InfoConsumer = InfoContext.Consumer;

export default InfoProvider;
