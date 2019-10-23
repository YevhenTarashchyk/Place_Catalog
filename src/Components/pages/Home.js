import React, { Component } from "react";
import { InfoConsumer } from "../../Context/context";
import Info from "../../Components/Main_Info/info";
import Slider from "../Slider/Slider";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />

        <div className="container">
          <div className="row mt-5">
            <InfoConsumer>
              {value => {
                return value.info.map(item => (
                  <Info key={item.id} item={item} />
                ));
              }}
            </InfoConsumer>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
