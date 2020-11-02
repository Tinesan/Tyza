import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import { Map as YMap, YMaps } from "react-yandex-maps";

import { H2 } from "ui/Title";

const Map = () => {
  return (
    <Element name="contacts">
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center">
              Где купить наш корм
            </H2>
          </Col>
        </Row>
      </Container>
      <div className="mt-3 mt-lg-5">
        <YMaps>
          <YMap
            style={{ width: "100%", height: 500 }}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          />
        </YMaps>
      </div>
    </Element>
  );
};

export default Map;
