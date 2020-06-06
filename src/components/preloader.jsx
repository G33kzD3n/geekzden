import React, { Component } from "react";

class Preloader extends Component {
  state = {};
  render() {
    return (
      <div id="preloader">
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
