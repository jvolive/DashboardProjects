import React, { FC } from "react";
import { Layout } from "antd";
import { AppFooter, AppHeader, AppSider } from "../common";
import { Content } from "antd/es/layout/layout";
import { useCollapsed, useDarkTheme } from "../../hooks";

interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { collapsed, toggleCollapsed } = useCollapsed();
  const { darkTheme, toggleTheme } = useDarkTheme();

  return (
    <Layout>
      <AppSider collapsed={collapsed} darkTheme={darkTheme} />
      <Layout>
        <AppHeader
          collapsed={collapsed}
          setCollapsed={toggleCollapsed}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          colorBgContainer="#ffffff"
        />
        <Content>{children}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
