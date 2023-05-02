import React from 'react';
import ConnectionsComponent from '../../components/connections/connections.component';
import SearchComponent from '../../components/search/search.component';
import { Col, Container, Row } from 'react-bootstrap';

import './dashboard.page.css';

export default function DashboardPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ConnectionsComponent className="test" />
          </Col>
          <Col>
            <SearchComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
