import React, { Component } from "react";

class Preloader extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      document
        .querySelector("#preloader")
        .classList.remove("preloader-visible");
      document.querySelector("#preloader").classList.add("preloader-hidden");
    }, 500);
  }
  render() {
    return (
      <div id="preloader" className="preloader-visible">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
