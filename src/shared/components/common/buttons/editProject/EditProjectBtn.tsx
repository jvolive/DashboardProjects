import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";

export const EditProjectBtn = () => {
  return (
    <Card style={{ width: 200, textAlign: "center", margin: "16px 16px" }}>
      <Link to="/edit-project">
        <EditOutlined style={{ fontSize: 24 }} />
        <div>Edit Project</div>
      </Link>
    </Card>
  );
};
