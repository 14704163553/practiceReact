// 电子产品列表接口
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
