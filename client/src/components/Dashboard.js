import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ children }) => {
  return (
    <div className="h-screen py-1">
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={8}>{children}</Col>
      </Row>
    </div>
  );
};

export default Dashboard;
