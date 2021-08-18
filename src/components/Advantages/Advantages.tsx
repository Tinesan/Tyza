import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

import Box from "images/icons/box.svg";
import Truck from "images/icons/delivery-truck.svg";
import Like from "images/icons/like.svg";
import Store from "images/icons/store.svg";
import { colors } from "ui/colors";
import { H2 } from "ui/Title";

import Advantage from "./Advantage";

const UnderlinedText = styled.p`
  margin-bottom: 0;
  color: ${colors.coffee};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const StoreDescription = (
  <>
    <span>Возможность приобрести корм в ближайших от вас пунктах продаж.</span>
    <Link to="contacts" offset={-30} spy smooth duration={1000}>
      <UnderlinedText className="m-t-2">
        Все адреса пунктов продаж
      </UnderlinedText>
    </Link>
  </>
);

const ADVANTAGES: {
  icon: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    icon: Like,
    title: "Натуральный состав",
    description:
      "Не содержит: сои, консервантов, красителей, соли, крахмала, стабилизаторов вкуса.",
  },
  {
    icon: Box,
    title: "Удобная упаковка",
    description:
      "Весь корм порезан на кусочки для удобства использования и упакован в вакуумные пакеты.",
  },
  {
    icon: Truck,
    title: "Доставка по Минску",
    description:
      "При заказе от 40 руб. доставка осуществляется бесплатно. При заказе от 25 руб. стоимость доставки составляет 4 руб.",
  },
  {
    icon: Store,
    title: "Много пунктов продаж",
    description: StoreDescription,
  },
];

export const AdvantagesWrapper = styled.section``;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;

const Advantages = () => {
  return (
    <AdvantagesWrapper>
      <Container>
        <Row>
          <Col>
            <TitleWrapper>
              <H2 className="amatic text-center coffee-color">
                Почему выбирают нас
              </H2>
            </TitleWrapper>
          </Col>
        </Row>
        <Row className="justify-content-center h-100">
          {ADVANTAGES.map((advantage, inx) => {
            const key: string = inx + advantage.title;
            return (
              <Col
                key={key}
                lg={3}
                md={6}
                className={(inx < 2 ? "mb-md-3 mb-lg-0" : "") + " mb-3 mb-md-0"}
              >
                <Advantage {...advantage} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </AdvantagesWrapper>
  );
};

export default Advantages;
