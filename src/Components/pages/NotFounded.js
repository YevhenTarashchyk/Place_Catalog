import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/not_found.scss";

class NotFounded extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Ops!!</h1>
              <h2>Error 404 Not Found</h2>
              <div className="error-details">
                Sorry, an error occured. The requested page was not found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-home" />
                  &nbsp;Back To Main
                </Link>
                <Link className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-envelope" />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFounded;
