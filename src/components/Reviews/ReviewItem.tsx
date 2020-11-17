import React from "react";
import styled from "styled-components";

import { device } from "ui/media";

type Props = {
  title: string;
  image: string;
  titleDescription: string;
  description: string;
};

const ReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  padding: 50px 30px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(193, 179, 168, 0.3);
  border-radius: 20px;

  @media ${device.tablet} {
    padding: 40px 20px;
  }
`;

const ReviewImageWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  overflow: hidden;
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ReviewItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  opacity: 0.55;
`;

const ReviewText = styled.span`
  font-size: 14px;
  opacity: 0.5;
`;

const ReviewDescription = styled.div`
  margin-top: 30px;
  @media ${device.tablet} {
    margin-top: 20px;
  }
`;

const ReviewItem = ({ title, image, titleDescription, description }: Props) => {
  return (
    <ReviewItemWrapper>
      <ReviewImageWrapper>
        <img src={image} alt={title} />
      </ReviewImageWrapper>
      <ReviewItemTitle className="mb-2">{title}</ReviewItemTitle>
      <div>
        <ReviewText>{titleDescription}</ReviewText>
      </div>
      <ReviewDescription>
        <ReviewText>{description}</ReviewText>
      </ReviewDescription>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
