import { Col, Row } from "antd";
import {
  AddNewProjectBtn,
  EditProjectBtn,
  Kanban,
} from "../../shared/components";
import { MainLayout } from "../../shared/layout";

export const ProjectsPage = () => {
  return (
    <MainLayout>
      <Row gutter={24}>
        <Col>
          <AddNewProjectBtn />
        </Col>
        <Col>
          <EditProjectBtn />
        </Col>
        <Col span={24}>
          <Kanban />
        </Col>
      </Row>
    </MainLayout>
  );
};
