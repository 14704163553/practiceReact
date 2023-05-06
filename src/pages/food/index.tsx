import React from "react";
import "./index.css";

interface Props {
  type?: number;
}

class Food extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  textData() {
    if (this.props.type === 1) {
      return "薯片列表";
    } else if (this.props.type === 2) {
      return "饮料列表";
    }
  }

  render() {
    return <div>{this.textData()}</div>;
  }
}

export default Food;
