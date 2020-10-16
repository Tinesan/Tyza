import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../ui/colors";

type Props = {
  text: string;
  color: ButtonColor;
  size: ButtonSize;
  onClick: () => void;
  className?: string;
};

export const ButtonColor = {
  TRANSPARENT: "TRANSPARENT",
  WHITE: "WHITE",
  LIGHT: "LIGHT",
} as const;

type ButtonColor = keyof typeof ButtonColor;

export const ButtonSize = {
  SMALL: "SMALL",
  LARGE: "LARGE",
} as const;

type ButtonSize = keyof typeof ButtonSize;

const StyledButton = styled.button<{ color: ButtonColor; size: ButtonSize }>`
  position: relative;
  background-color: transparent;
  border-radius: 60px;
  border: none;
  outline: none;
  white-space: nowrap;
  text-transform: uppercase;
  transition-duration: 0.3s;
  color: ${colors.coffee};

  ${({ color }) => {
    switch (color) {
      case ButtonColor.TRANSPARENT:
        return css`
          background-color: transparent;
          border: 1px solid ${colors.white};

          &:hover {
            background-color: ${colors.white};
            text-shadow: 0 0 0.65px ${colors.coffee},
              0 0 0.65px ${colors.coffee};
          }
        `;
      case ButtonColor.WHITE:
        return css`
          background: ${colors.white};

          span {
            position: relative;
            z-index: 3;
          }

          :after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 60px;
            background: linear-gradient(180deg, #c1b3a8 0%, #957965 100%);
            transition: opacity 0.3s;
            z-index: 2;
            opacity: 0;
          }

          &:hover {
            color: ${colors.white};
            text-shadow: 0 0 0.65px ${colors.white}, 0 0 0.65px ${colors.white};
            filter: drop-shadow(0px 4px 20px rgba(193, 179, 168, 0.5));
            &:after {
              opacity: 1;
            }
          }
        `;
      default:
        break;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case ButtonSize.LARGE:
        return css`
          width: 260px;
          height: 60px;
          font-weight: 600;
          font-size: 16px;
          line-height: 16px;
        `;
      case ButtonSize.SMALL:
        return css`
          padding: 10px 25px;
        `;
      default:
        break;
    }
  }}
`;

const Button = ({ color, size, text, className, onClick }: Props) => {
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      className={className}
    >
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;

const categories = [{ id: "1" }, { id: "2" }];

const products = [{ catId: "1" }, { catId: "2" }];
