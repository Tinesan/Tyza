import React, { useContext } from "react";
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
  background-color: ${colors.silk};
`;

const BasketIconWrapper = styled.div<{ whiteIndicator: boolean | undefined }>`
  position: relative;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
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
  const { openModal } = useModal();
  const { basketValues } = useContext(BasketContext);
  const basketValuesLength = Object.keys(basketValues).length;
  const hasBasketValues = !!basketValuesLength;

  return hasBasketValues ? (
    <BasketIconWrapper
      onClick={() => openModal("backetModal")}
      className={className}
      whiteIndicator={whiteIndicator}
    >
      {hasBasketValues && (
        <BasketIndicator>{basketValuesLength}</BasketIndicator>
      )}
      <img src={BIcon} alt="BasketIcon" />
    </BasketIconWrapper>
  ) : null;
};

export default BasketIcon;
