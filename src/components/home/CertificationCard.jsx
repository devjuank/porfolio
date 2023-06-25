import React from 'react';

import {
  Col,
  Card,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const CertificationCard = ({ data }) => {
  return(
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Img variant="top" src={data.image}/>
          <Card.Title as="h5">{data.name || <Skeleton />} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">ID {data.certificationID || <Skeleton />}</Card.Subtitle>
          <Card.Link href={data.link} target="_blank">Link</Card.Link>
          </Card.Body>
      </Card>
    </Col>
  );  
}

export default CertificationCard;