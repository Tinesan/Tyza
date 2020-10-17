import { H2 } from "components/Advantages/Advantages";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "ui/colors";
import ProductAdvantageBg from "images/productAdvantageBg.png";
import LineWithCircleLT from "images/icons/lineWithCircleLT.svg";
import LineWithCircleRT from "images/icons/lineWithCircleRT.svg";
import LineWithCircleLB from "images/icons/lineWithCircleLB.svg";
import LineWithCircleRB from "images/icons/lineWithCircleRB.svg";
import { url } from "inspector";

const ProductAdvantagesWrapper = styled.section`
  padding-bottom: 80px;
  background: url(${ProductAdvantageBg}) no-repeat ${colors.dawnPink};
  background-position: 50% bottom;
  background-size: 400px auto;
`;

const ProductAdvantagesItemWrapper = styled.div<{
  line: string;
  top?: boolean;
  left?: boolean;
}>`
  position: relative;
  max-width: 300px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: ${({ top }) => `${top ? "-15px" : "auto"}`};
    bottom: ${({ top }) => `${!top ? "-30px" : "auto"}`};
    left: ${({ left }) => `${left ? "-15px" : "auto"}`};
    right: ${({ left }) => `${!left ? "0" : "auto"}`};
    width: calc(100% + 50px);
    height: 50px;
    background: ${({ line }) => `url(${line}) no-repeat`};
    background-size: contain;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 70px;
`;

const ProductAdvantages = () => {
  return (
    <ProductAdvantagesWrapper>
      <Container>
        <Row>
          <Col>
            <TitleWrapper>
              <H2 className="amatic coffee-color text-center">
                Преимущества натурального корма
              </H2>
            </TitleWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductAdvantagesItemWrapper
              className="mt-4"
              top={true}
              left={true}
              line={LineWithCircleLT}
            >
              Корм обладает Высокой калорийностью и содержанием белка, благодаря
              соблюдению оптимального баланса мяса, жира и субпродуктов.
            </ProductAdvantagesItemWrapper>
          </Col>
          <Col className="d-flex justify-content-end">
            <ProductAdvantagesItemWrapper
              className="mt-4"
              top={true}
              left={false}
              line={LineWithCircleRT}
            >
              Корм содержит все полезные витамины, минералы, микроэлементы и
              аминокислоты, которые сохраняются благодаря отсутствию термической
              обработки.
            </ProductAdvantagesItemWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductAdvantagesItemWrapper
              line={LineWithCircleLB}
              top={false}
              left={true}
              className="mb-4 d-flex align-items-end"
            >
              Натуральный корм не содержит сою, крахмал и других вредных
              наполнителей, способных вызвать аллергические реакции и негативно
              сказаться на здоровье питомца.
            </ProductAdvantagesItemWrapper>
          </Col>
          <Col className="d-flex justify-content-end">
            <ProductAdvantagesItemWrapper
              top={false}
              left={false}
              line={LineWithCircleRB}
              className="d-flex align-items-end mb-4"
            >
              Рецептура натурального корма разработана совместно с ветеринарными
              врачами.
            </ProductAdvantagesItemWrapper>
          </Col>
        </Row>
      </Container>
    </ProductAdvantagesWrapper>
  );
};

export default ProductAdvantages;
