import React, { useState } from "react";
import {
  HomeOutlined,
  SettingOutlined,
  PieChartOutlined,
  CoffeeOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Routes, Route, useLocation, To } from "react-router-dom";
import logo from "../../logo.svg";
import "./index.css";

// 内容模块引入
import HomeShow from "./show/index"; // 首页
import Charts from "../charts/index"; // 数据总览
import Computer from "../electron/computer"; // 电脑列表
import Phone from "../electron/phone"; // 手机列表
import Beverage from "../food/beverage"; // 薯片列表
import Potato from "../food/potato"; // 饮料列表
import Setup from "../setup/index"; // 设置

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "/home", <HomeOutlined />),
  getItem("数据", "/charts", <PieChartOutlined />),
  getItem("电子产品", "sub1", <DesktopOutlined />, [
    getItem("电脑列表", "/electron/computer"),
    getItem("手机列表", "/electron/phone"),
  ]),
  getItem("食品产品", "sub2", <CoffeeOutlined />, [
    getItem("薯片列表", "/food/beverage"),
    getItem("饮料列表", "/food/potato"),
  ]),
  getItem("设置", "/setup", <SettingOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuOnClick = (e: { key: To }) => {
    // console.log(e);
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          mode="inline"
          items={items}
          onClick={menuOnClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 className="title">个人练习react</h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              margin: "10px 0",
              minHeight: 380,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/home" element={<HomeShow />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/electron/computer" element={<Computer />} />
              <Route path="/electron/phone" element={<Phone />} />
              <Route path="/food/beverage" element={<Beverage />} />
              <Route path="/food/potato" element={<Potato />} />
              <Route path="/setup" element={<Setup />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
