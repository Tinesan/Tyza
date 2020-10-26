import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import BIcon from "images/icons/basketIcon.svg";
import useModal from "modals/hooks";
import { BasketContext } from "providers/BasketProvider";
import { colors } from "ui/colors";

type Props = {
  whiteIndicator?: boolean;
  className?: string;
};

const BasketIndicator = styled.div`
  position: absolute;
  z-index: 3;
  top: -10px;
  left: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  line-height: 1;
  font-size: 14px;
  font-weight: 500;
  transition-duration: 0.3s;
  color: ${colors.white};
  background-color: #c94c4c;

  &.large {
    box-shadow: 0 0 10px 3px ${colors.vividTangerine};
  }
`;

const BasketIconWrapper = styled.div<{ whiteIndicator: boolean | undefined }>`
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;

  img {
    transition-duration: 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  ${({ whiteIndicator }) =>
    whiteIndicator &&
    css`
      ${BasketIndicator} {
        background-color: ${colors.white};
        color: ${colors.coffee};
      }
    `}
`;

const BasketIcon = ({ whiteIndicator, className }: Props) => {
  const indicator = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const { basketValues } = useContext(BasketContext);
  const basketValuesLength = Object.keys(basketValues).length;

  useEffect(() => {
    if (indicator.current) {
      indicator.current.classList.add("large");
      setTimeout(() => {
        indicator.current?.classList.remove("large");
      }, 300);
    }
  }, [basketValues]);

  return (
    <BasketIconWrapper
      onClick={() => openModal("backetModal")}
      className={className}
      whiteIndicator={whiteIndicator}
    >
      {!!basketValuesLength && (
        <BasketIndicator ref={indicator}>{basketValuesLength}</BasketIndicator>
      )}
      <img src={BIcon} alt="BasketIcon" />
    </BasketIconWrapper>
  );
};

export default BasketIcon;
