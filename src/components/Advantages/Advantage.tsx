import React, { ReactNode } from "react";
import styled from "styled-components";

import { colors } from "ui/colors";

type Props = {
  icon: string;
  title: string;
  secondTitle?: string;
  description: ReactNode;
  secondDescription?: string;
};

const AdvantageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 40px 10px 20px 10px;
  border: 2px solid ${colors.wafer};
  border-radius: 20px;
  text-align: center;
  transition-duration: 0.15s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px 0px ${colors.wafer};
  }
`;

const IconWrapper = styled.div``;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  opacity: 0.55;
`;

const Description = styled.div`
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
`;

const Advantage = ({
  icon,
  title,
  secondTitle,
  description,
  secondDescription,
}: Props) => {
  return (
    <AdvantageWrapper>
      <Title className="mb-3">{title}</Title>
      <Description className="mb-3">{description}</Description>
      {secondTitle && <Title className="mb-3">{secondTitle}</Title>}
      {secondDescription && (
        <Description className="mb-2">{secondDescription}</Description>
      )}
      <IconWrapper className="mt-auto">
        <img src={icon} alt={title} />
      </IconWrapper>
    </AdvantageWrapper>
  );
};

export default Advantage;
