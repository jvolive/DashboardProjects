import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

import "./FormNew.scss";

const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

export const FormNew: React.FC = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const openNotification = () => {
    api.open({
      message: "Project Added",
      description: "Your new project has been successfully added!",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const handleAddProject = () => {
    setIsLoading(true);
    openNotification();

    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2500);
  };

  return (
    <div className="form-new-container">
      <h3>New Form Project</h3>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Project Name">
          <Input />
        </Form.Item>

        <Form.Item label="Deadline">
          <RangePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="First Tasks" valuePropName="checked">
          <Checkbox>SAP</Checkbox>
          <Checkbox>Project presentation</Checkbox>
          <Checkbox>...</Checkbox>
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item className="Button">
          <Button onClick={handleAddProject} loading={isLoading}>
            Add New Project
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  );
};
