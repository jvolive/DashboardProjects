import React from "react";
import { Progress } from "antd";

import "./ProgressChart.scss";

export const ProgressChart: React.FC = () => (
  <div className="progress-chart-container">
    <h3>Projects Progress</h3>
    <Progress percent={30} strokeWidth={15} className="progress-bar" />
    <Progress percent={50} strokeWidth={15} className="progress-bar" />
    <Progress
      percent={20}
      status="exception"
      strokeWidth={15}
      className="progress-bar"
    />
    <Progress percent={100} strokeWidth={15} className="progress-bar" />
    <Progress percent={90} strokeWidth={15} className="progress-bar" />
  </div>
);
