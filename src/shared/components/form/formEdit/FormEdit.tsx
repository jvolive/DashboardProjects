import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, Popconfirm } from "antd";
import "./FormEdit.scss";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

export const FormEdit: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/dashboard");
  };

  return (
    <div className="form-edit-container">
      <h3>Edit Form Project</h3>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Project Name">
          <Input defaultValue="Project 4" />
        </Form.Item>

        <Form.Item label="Deadline">
          <RangePicker
            defaultValue={[
              dayjs("11/06/2024", dateFormat),
              dayjs("14/07/2024", dateFormat),
            ]}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item label="First Tasks">
          <Checkbox defaultChecked>SAP</Checkbox>
          <Checkbox defaultChecked>Project presentation</Checkbox>
          <Checkbox>...</Checkbox>
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item className="Button">
          <Popconfirm
            title="Edit the Project"
            description="Are you sure to edit this project?"
            icon={<QuestionCircleOutlined style={{ color: "orange" }} />}
            onConfirm={handleConfirm}
          >
            <Button style={{ color: "orange" }}>Edit the project</Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </div>
  );
};
