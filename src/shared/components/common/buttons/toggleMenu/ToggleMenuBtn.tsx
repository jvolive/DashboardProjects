import React from "react";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface ToggleMenuButtonProps {
  collapsed: boolean;
  onClick: () => void;
}

export const ToggleMenuBtn: React.FC<ToggleMenuButtonProps> = ({
  collapsed,
  onClick,
}) => {
  return (
    <div className="toggle-menu">
      <Button
        type="text"
        onClick={onClick}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </div>
  );
};
