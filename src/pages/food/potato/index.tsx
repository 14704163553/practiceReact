import React, { Component } from "react";
import Food from "../index";

class Potato extends Component {
  render() {
    return (
      <div>
        <Food type={2} />
      </div>
    );
  }
}

export default Potato;
