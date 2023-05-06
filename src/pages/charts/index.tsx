import React, { Component } from "react";
import { message } from "antd";
import "./index.css";

// 全局引入方式
import * as echarts from "echarts";

// 按需引入方式
// import * as echarts from "echarts/lib/echarts";
// import "echarts/lib/chart/line";
// import "echarts/lib/component/title";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/legend";
// import "echarts/lib/component/polar";

class Charts extends Component {
  async myChartOne(oneData: { title: string; data: Array<{ name: never }> }) {
    const stateOne = {
      celldata: [],
    };
    oneData.data.forEach((itme) => stateOne.celldata.push(itme.name));
    const myChartOne = echarts.init(
      document.getElementById("mainOne") as HTMLElement
    );
    myChartOne.setOption({
      title: {
        text: oneData.title,
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        top: "bottom",
        data: stateOne.celldata,
      },
      series: [
        {
          name: oneData.title,
          type: "pie",
          radius: [30, 110],
          center: ["50%", "50%"],
          roseType: "area",
          data: oneData.data,
        },
      ],
    });
  }
  async myChartTwo(twoData: { title: string; data: Array<{ name: never }> }) {
    const stateTwo = {
      celldata: [],
    };
    twoData.data.forEach((itme) => stateTwo.celldata.push(itme.name));
    const myChartTwo = echarts.init(
      document.getElementById("mainTwo") as HTMLElement
    );

    myChartTwo.setOption({
      title: {
        text: twoData.title,
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      legend: {
        left: "center",
        top: "bottom",
        data: stateTwo.celldata,
      },
      series: [
        {
          name: twoData.title,
          type: "funnel",
          top: 60,
          bottom: 60,
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          center: ["50%", "50%"],
          gap: 2,
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: twoData.data,
        },
      ],
    });
  }
  async componentDidMount() {
    this.chartsDataApi();
  }

  async chartsDataApi() {
    fetch("http://localhost:4000/api/chartsData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.code === 0) {
          const oneData = data.data.one;
          const twoData = data.data.two;
          this.myChartOne(oneData);
          this.myChartTwo(twoData);
        } else {
          message.error("数据获取异常请刷新重试", 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          id="mainOne"
          style={{ width: "50%", height: 400, float: "left" }}
        ></div>
        <div
          id="mainTwo"
          style={{ width: "50%", height: 400, float: "left" }}
        ></div>
      </div>
    );
  }
}

export default Charts;
