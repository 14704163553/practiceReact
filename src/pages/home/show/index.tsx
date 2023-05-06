import React from "react";
import logo from "../../../logo.svg";
// import { Button } from "antd";
import "antd/dist/reset.css";
import "./index.css";

export default function HomeShow() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="HomeShow-title">欢迎体验</h1>
      <h1 className="HomeShow-subTitle">
        声明：本项目只是个人练习项目，无涉及任何商业属性，望周知
      </h1>
    </div>
  );
}
