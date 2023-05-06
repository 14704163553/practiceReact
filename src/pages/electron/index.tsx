import React from "react";
import "./index.css";

interface Props {
  type?: number;
}

class Electron extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  textData() {
    if (this.props.type === 1) {
      return "电脑列表";
    } else if (this.props.type === 2) {
      return "手机列表";
    }
  }

  render() {
    return <div>{this.textData()}</div>;
  }
}

export default Electron;
