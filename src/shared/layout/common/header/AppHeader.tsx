import React from "react";
import { Header } from "antd/es/layout/layout";
import {
  ToggleMenuBtn,
  SearchInput,
  ToggleThemeBtn,
} from "../../../components/common";

import "./Header.scss";

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  colorBgContainer: string;
  darkTheme: boolean;
  toggleTheme: () => void;
}

export const AppHeader: React.FC<HeaderProps> = ({
  collapsed,
  setCollapsed,
  darkTheme,
  toggleTheme,
  colorBgContainer,
}) => {
  return (
    <Header className="toggle-menu" style={{ background: colorBgContainer }}>
      <div>
        <ToggleMenuBtn
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="search-input">
        <SearchInput />
      </div>
      <div className="toggle-theme">
        <ToggleThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </Header>
  );
};
