import React from "react";
import { Avatar, List } from "antd";

import "./NewListProjects.scss";

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
//
export const NewListProjects: React.FC = () => (
  <div className="new-list-projects-container">
    <h3>Projects</h3>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href="#">{item.title}</a>}
            description="Description of projects"
          />
        </List.Item>
      )}
    />
  </div>
);
