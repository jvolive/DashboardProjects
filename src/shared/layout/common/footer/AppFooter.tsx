import { Footer } from "antd/es/layout/layout";

export const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Systems JVO ©{new Date().getFullYear()} Created by João Oliveira
    </Footer>
  );
};
