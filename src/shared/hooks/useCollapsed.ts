import { useState } from "react";

export const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return { collapsed, toggleCollapsed };
};
