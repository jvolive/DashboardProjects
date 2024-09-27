import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";

export const AddNewProjectBtn = () => {
  return (
    <Card style={{ width: 200, textAlign: "center", margin: "16px 16px" }}>
      <Link to="/new-project">
        <PlusOutlined style={{ fontSize: 24 }} />
        <div>New Project</div>
      </Link>
    </Card>
  );
};
