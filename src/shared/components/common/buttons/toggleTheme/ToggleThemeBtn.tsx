import React from "react";
import { Button } from "antd";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

interface ToggleThemeBtnProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

export const ToggleThemeBtn: React.FC<ToggleThemeBtnProps> = ({
  darkTheme,
  toggleTheme,
}) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};
