import React from "react";
import {
  AreaChartOutlined,
  BarsOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./MenuList.scss";

interface MenuListProps {
  darkTheme: boolean;
}

export const MenuList: React.FC<MenuListProps> = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/dashboard">Home</Link>
      </Menu.Item>
      <Menu.Item key="new-project" icon={<FundProjectionScreenOutlined />}>
        <Link to="/projects">Projects</Link>
      </Menu.Item>
      <Menu.Item key="tasks" icon={<BarsOutlined />} title="Tasks">
        {/* <Link to="/tasks">Tasks</Link> */}
        Tasks
      </Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        {/* <Link to="/progress">Progress</Link> */}
        Progress
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        {/* <Link to="/setting">Setting</Link> */}
        Setting
      </Menu.Item>
    </Menu>
  );
};
