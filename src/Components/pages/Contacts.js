import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                title="address"
                src="https://www.google.com/maps/d/embed?mid=1kBBs4Ml6d0J-TmR7GDAn9K_T_CgTK5Bm"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0"
                }}
                allowFullScreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  className="form-control"
                />
                <button className="btn btn-outline-primary text-uppercase mt-3">
                  <i className="fa fa-papper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
