import React from "react";
import Sider from "antd/es/layout/Sider";
import { CompanyLogo } from "../../../components/common";
import { MenuList } from "../../../components/common/lists/menuList/MenuList";

import "./Sidebar.scss";

interface SiderProps {
  collapsed: boolean;
  darkTheme: boolean;
}

export const AppSider: React.FC<SiderProps> = ({ collapsed, darkTheme }) => {
  return (
    <Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme={darkTheme ? "dark" : "light"}
      className="sidebar"
    >
      <CompanyLogo />
      <MenuList darkTheme={darkTheme} />
    </Sider>
  );
};
