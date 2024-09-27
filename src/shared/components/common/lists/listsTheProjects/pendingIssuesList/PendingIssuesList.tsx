import React from "react";
import { Card, List } from "antd";

import "./PendingIssuesList.scss";

const data = [
  {
    title: "Project Title 1",
  },
  {
    title: "Project Title 2",
  },
  {
    title: "Project Title 3",
  },
];

export const PendingIssuesList: React.FC = () => (
  <div className="pending-issues-list-container">
    <h3>Pending issues in the projects</h3>
    <List
      grid={{ gutter: 15, column: 3 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  </div>
);
