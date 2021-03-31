import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";

import DogOnFoot from "images/dogOnFoot.webp";
import { colors } from "ui/colors";
import { device } from "ui/media";
import { H2 } from "ui/Title";

const PortionWrapper = styled.section`
  position: relative;
  padding: 90px 0;
  color: ${colors.white};

  @media ${device.tablet} {
    padding: 40px 0;
  }

  @media ${device.mobile} {
    margin-bottom: 200px;
    padding: 20px 0;
    color: ${colors.coffee};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${DogOnFoot}) no-repeat,
      linear-gradient(to bottom, white 20%, ${colors.silk} 20% 80%, white 80%);
    background-position: 50% bottom;
    background-size: contain;

    @media ${device.tablet} {
      background-position: 55% bottom, 100% center;
    }

    @media ${device.mobile} {
      top: 100%;
      height: 200px;
    }
  }
`;

const PortionContent = styled.div`
  padding: 70px 0;
  background-color: ${colors.silk};

  @media ${device.tablet} {
    padding: 35px 0;
  }

  @media ${device.mobile} {
    padding: 10px 0;
    background-color: transparent;
  }
`;

const PortionMainDescription = styled.p`
  font-size: 24px;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;

const PortionSecondaryDescription = styled.p`
  font-size: 18px;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Portion = () => {
  return (
    <Element name="info">
      <PortionWrapper>
        <PortionContent>
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <H2 className="amatic mb-2 mb-md-2 mb-lg-5">
                  Порция взрослой собаки
                </H2>
                <PortionMainDescription>
                  Вес взрослой собаки * на <b>0,035</b>
                </PortionMainDescription>
                <PortionSecondaryDescription>
                  Пример: собака 10 кг * 0,035 = 350 гр.
                </PortionSecondaryDescription>
              </Col>
              <Col className="mt-5 mt-md-0" sm={12} md={{ span: 4, offset: 2 }}>
                <H2 className="amatic mb-2 mb-md-2  mb-lg-5">Порция щенка</H2>
                <PortionMainDescription>
                  Вес щенка * на <b>0,065</b>
                </PortionMainDescription>
                <PortionSecondaryDescription>
                  Пример: щенок 5 кг * 0,065 = 325 гр.
                </PortionSecondaryDescription>
              </Col>
            </Row>
          </Container>
        </PortionContent>
      </PortionWrapper>
    </Element>
  );
};

export default Portion;
