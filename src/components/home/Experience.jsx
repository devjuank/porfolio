import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Jumbotron id="experiences" className="bg-light">
        <Container>
          <h2 className="display-4 pb-5 text-center">{experiences.heading}</h2>
            <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default Experience;