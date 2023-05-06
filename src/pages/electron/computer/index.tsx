import React, { Component } from "react";
import Electron from "../index";

class Computer extends Component {
  render() {
    return (
      <div>
        <Electron type={1} />
      </div>
    );
  }
}

export default Computer;
