import React, { Component } from "react";
import Food from "../index";

class Beverage extends Component {
  render() {
    return (
      <div>
        <Food type={1} />
      </div>
    );
  }
}

export default Beverage;
