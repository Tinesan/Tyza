import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider, { Settings } from "react-slick";
import styled, { css } from "styled-components";
import TestFoto from "images/testImages/person.png";
import Arrow from "images/icons/arrow.svg";

import { H2 } from "ui/Title";

import ReviewItem from "./ReviewItem";
import { colors } from "ui/colors";

const ReviewsWrapper = styled.section`
  overflow: hidden;
  .slick-slide {
    opacity: 0 !important;
    transition-duration: 0.3s;

    &.slick-active {
      opacity: 1 !important;
    }
  }
`;

const DotsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 15px;
      height: 15px;
      background-color: ${colors.mercury};
      border-radius: 50%;
      transition-duration: 0.2s;
      &:before {
        content: none;
      }

      &:hover {
        box-shadow: 0px 0px 3px#d1d1d1;
      }
    }

    &.slick-active {
      button {
        width: 20px;
        height: 20px;
        background: linear-gradient(180deg, #e2d2c5 0%, #c1b3a8 100%);
        box-shadow: 0px 0px 10px rgba(193, 179, 168, 0.3);
      }
    }
  }
`;

const ArrowWrapper = styled.div<{ prev?: boolean; disabled: boolean }>`
  position: absolute;
  z-index: 10;
  top: 100%;
  box-sizing: border-box;
  left: ${({ prev }) => (prev ? "calc(100% - 75px)" : "calc(100% - 45px)")};
  width: 30px;
  padding: 0 5px;
  ${({ prev }) =>
    prev &&
    css`
      transform: scale(-1, 1);
      filter: FlipH;
    `}

  img {
    ${({ disabled }) =>
      disabled &&
      css`
        filter: grayscale(100%);
        opacity: 0.5;
      `}
  }
`;

type ArrowProps = {
  prev?: boolean;
  onClick: () => void;
  className?: string;
};

const SlickArrow = ({ onClick, prev, className }: ArrowProps) => {
  const isDisabled = className?.includes("slick-disabled");
  return (
    <ArrowWrapper prev={!!prev} onClick={onClick} disabled={!!isDisabled}>
      <img src={Arrow} alt="arrow" />
    </ArrowWrapper>
  );
};

const settings: Settings = {
  dots: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  appendDots: (dots) => <DotsWrapper>{dots}</DotsWrapper>,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const ItemWrapper = styled.div`
  padding: 15px 15px 30px;
`;

const SlideWrapper = styled.div`
  padding-bottom: 30px;
`;

const Reviews = () => {
  const slider = useRef<Slider | null>(null);
  console.log(slider);
  return (
    <ReviewsWrapper>
      <Container>
        <Row>
          <Col>
            <H2 className="amatic coffee-color text-center mb-5">
              Отзывы о нашем корме
            </H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <SlideWrapper>
              <Slider
                ref={slider}
                {...settings}
                prevArrow={
                  <SlickArrow
                    prev
                    onClick={() => slider.current?.slickPrev()}
                  />
                }
                nextArrow={
                  <SlickArrow onClick={() => slider.current?.slickNext()} />
                }
              >
                <ItemWrapper>
                  <ReviewItem
                    image={TestFoto}
                    title="Алена Трубицина1"
                    titleDescription="Порода собаки: Чау-чау"
                    description="Раньше кормила собаку кормом акана, это дорогой корм профессиональной линейки, но изменились мои финансовые обстоятельства, и я уже не могу потянуть этот корм, а кормить чем-то по дешевле 
                      не позволяет совесть. Перешли на ваш натуральный корм, пока очень довольны."
                  />
                </ItemWrapper>
                <ItemWrapper>
                  <ReviewItem
                    image={TestFoto}
                    title="Алена Трубицина2"
                    titleDescription="Порода собаки: Чау-чау"
                    description="Раньше кормила собаку кормом акана, это дорогой корм профессиональной линейки, но изменились мои финансовые обстоятельства, и я уже не могу потянуть этот корм, а кормить чем-то по дешевле 
                      не позволяет совесть. Перешли на ваш натуральный корм, пока очень довольны."
                  />
                </ItemWrapper>
                <ItemWrapper>
                  <ReviewItem
                    image={TestFoto}
                    title="Алена Трубицина3"
                    titleDescription="Порода собаки: Чау-чау"
                    description="Раньше кормила собаку кормом акана, это дорогой корм профессиональной линейки, но изменились мои финансовые обстоятельства, и я уже не могу потянуть этот корм, а кормить чем-то по дешевле 
                      не позволяет совесть. Перешли на ваш натуральный корм, пока очень довольны."
                  />
                </ItemWrapper>
                <ItemWrapper>
                  <ReviewItem
                    image={TestFoto}
                    title="Алена Трубицина4"
                    titleDescription="Порода собаки: Чау-чау"
                    description="Раньше кормила собаку кормом акана, это дорогой корм профессиональной линейки, но изменились мои финансовые обстоятельства, и я уже не могу потянуть этот корм, а кормить чем-то по дешевле 
                      не позволяет совесть. Перешли на ваш натуральный корм, пока очень довольны."
                  />
                </ItemWrapper>
              </Slider>
            </SlideWrapper>
          </Col>
        </Row>
      </Container>
    </ReviewsWrapper>
  );
};

export default Reviews;
