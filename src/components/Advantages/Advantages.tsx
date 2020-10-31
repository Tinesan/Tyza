import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Box from "images/icons/box.svg";
import Truck from "images/icons/delivery-truck.svg";
import Like from "images/icons/like.svg";
import Store from "images/icons/store.svg";
import { colors } from "ui/colors";
import { H2 } from "ui/Title";

import Advantage from "./Advantage";
import { device } from "ui/media";

const UnderlinedText = styled.p`
  margin-bottom: 0;
  color: ${colors.thatch};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const StoreDescription = (
  <>
    <span>Возможность приобрести корм в ближайших от васпунктах продаж.</span>
    <UnderlinedText className="m-t-2" onClick={console.log}>
      Все адреса пунктов продаж
    </UnderlinedText>
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
      "Весь свой корм мы упаковываем в полиэтиленовую плёнку, для удобства хранения в морозильной камере.",
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

export const AdvantagesWrapper = styled.section`
  @media ${device.mobile} {
    display: none;
  }
`;

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
              <Col key={key} lg={3} md={6} className={inx < 2 ? "mb-md-3" : ""}>
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
