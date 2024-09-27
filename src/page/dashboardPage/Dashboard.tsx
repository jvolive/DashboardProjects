import { Col, Row } from "antd";
import {
  NewListProjects,
  ProgressChart,
  PendingIssuesList,
} from "../../shared/components";
import { MainLayout } from "../../shared/layout";

export const Dashboard = () => {
  return (
    <MainLayout>
      <Row gutter={24}>
        <Col span={12}>
          <NewListProjects />
        </Col>
        <Col span={12}>
          <ProgressChart />
        </Col>
        <Col span={24}>
          <PendingIssuesList />
        </Col>
      </Row>
    </MainLayout>
  );
};
