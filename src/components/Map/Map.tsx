import React from "react";
import styled from "styled-components";
import { YMaps, Map as YMap } from "react-yandex-maps";
import { Col, Container, Row } from "react-bootstrap";
import { H2 } from "components/Advantages/Advantages";

const MapWrapper = styled.section``;

const Map = () => {
  return (
    <MapWrapper>
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center">
              Где купить наш корм
            </H2>
          </Col>
        </Row>
      </Container>
      <div className="mt-5">
        <YMaps>
          <YMap
            style={{ width: "100%", height: 500 }}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          />
        </YMaps>
      </div>
    </MapWrapper>
  );
};

export default Map;
