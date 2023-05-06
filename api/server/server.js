// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const cors = require("cors");

const app = express();

app.use(cors());
// 1.2 配置解析表单数据的中间件, 这个中间件只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));
// 1.3 只能解析parse application/json 格式
app.use(express.json());

// 数据总览
app.get("/api/chartsData", (req, res) => {
  res.json({
    code: 0,
    message: "成功",
    data: {
      one: {
        title: "分数统计",
        data: [
          { value: 150, name: "语文" },
          { value: 110, name: "物理" },
          { value: 150, name: "数学" },
          { value: 100, name: "化学" },
          { value: 150, name: "英语" },
          { value: 90, name: "生物" },
        ],
      },
      two: {
        title: "地区统计",
        data: [
          { value: 60, name: "北京" },
          { value: 40, name: "上海" },
          { value: 20, name: "深圳" },
          { value: 80, name: "广州" },
          { value: 100, name: "沈阳" },
        ],
      },
    },
  });
});

// 电子产品列表
app.get("/api/getElectronList", (req, res) => {
  res.json({
    code: 0,
    message: "成功",
    data: {
      one: {
        title: "分数统计",
        data: [
          { value: 150, name: "语文" },
          { value: 110, name: "物理" },
          { value: 150, name: "数学" },
          { value: 100, name: "化学" },
          { value: 150, name: "英语" },
          { value: 90, name: "生物" },
        ],
      },
      two: {
        title: "地区统计",
        data: [
          { value: 60, name: "北京" },
          { value: 40, name: "上海" },
          { value: 20, name: "深圳" },
          { value: 80, name: "广州" },
          { value: 100, name: "沈阳" },
        ],
      },
    },
  });
});

app.listen(4000, () => {
  console.log("正在监听4000端口");
});
