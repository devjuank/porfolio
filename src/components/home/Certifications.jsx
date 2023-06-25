import React from 'react';
import CertificationCard from "./CertificationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Certifications = ({ certifications }) => {
  return (
    <section className="section">
        <Jumbotron id="certifications" className="bg-light">
      <Container>
        
        <h2 className="display-4 pb-5 text-center">{certifications.heading}</h2>  
          <Row>
            {
              certifications.data.map((data, index) => {
                return <CertificationCard key={index} data={data} />
              })
            }
          </Row>
        
      </Container>
      </Jumbotron>
    </section>
  );
}

export default Certifications;