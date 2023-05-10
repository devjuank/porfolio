import React from 'react';

import {
  Col,
  Card,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const ExperienceCard = ({ data }) => {
  return(
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Img variant="top" src={data.companylogo}/>
          <Card.Title as="h5">{data.name || <Skeleton />} </Card.Title>
          <Card.Text>{(!data.description) ? "" : data.description || <Skeleton count={3} />} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );  
  /*
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
  */
}

export default ExperienceCard;