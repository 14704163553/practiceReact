import React from "react";
import logo from "../../logo.svg";
import { Button } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          type="primary"
          onClick={() => {
            navigate("/home", { replace: true });
          }}
        >
          前往体验
        </Button>
      </header>
    </div>
  );
}
