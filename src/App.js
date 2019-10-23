import React, { Component } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About_Us";
import Contacts from "./Components/pages/Contacts";
import Details from "./Components/pages/Details";
import NotFoundPage from "./Components/pages/NotFounded";
import Loader from "./Components/Loader/loader";

export class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5535);
  }

  render() {
    return <>{this.state.loading ? <Loader /> : <Content />}</>;
  }
}

const Content = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
