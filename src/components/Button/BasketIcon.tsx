import React from "react";
import styled from "styled-components";

import BIcon from "images/icons/basketIcon.svg";

type Props = {
  className?: string;
  onClick?: () => void;
};

const BasketIconWrapper = styled.div`
  cursor: pointer;
`;

const BasketIcon = ({ className, onClick }: Props) => {
  return (
    <BasketIconWrapper className={className} onClick={onClick}>
      <img src={BIcon} alt="BasketIcon" />
    </BasketIconWrapper>
  );
};

export default BasketIcon;
