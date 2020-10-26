import styled, { css } from "styled-components";

import { colors } from "ui/colors";

import { ButtonColor, ButtonSize } from ".";
import { TButtonColor, TButtonSize } from "./Button";

export const StyledButton = styled.button<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    color: TButtonColor;
    size: TButtonSize;
  }
>`
  position: relative;
  background-color: transparent;
  border-radius: 60px;
  border: none;
  outline: none;
  white-space: nowrap;
  text-transform: uppercase;
  transition-duration: 0.4s;
  color: ${colors.coffee};
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

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

          &:active {
            box-shadow: 0 0 8px 1px ${colors.white};
          }
        `;
      case ButtonColor.WHITE_WITH_BORDER:
        return css`
          background-color: ${colors.white};
          border: 1px solid ${colors.silk};

          &:hover {
            background-color: ${colors.silk};
            color: ${colors.white};
            text-shadow: 0 0 0.65px ${colors.white}, 0 0 0.65px ${colors.white};
          }

          &:active {
            box-shadow: 0 0 8px 1px ${colors.white};
          }
        `;
      case ButtonColor.COFFEE_GRADIENT:
        return css`
          background: linear-gradient(180deg, #f3ede9 0%, #dfcfc2 100%);
          color: ${colors.coffee};

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

          &:active {
            box-shadow: 0 0 4px 0px #c1b3a8;
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

          &:active {
            box-shadow: 0 0 4px 0px #c1b3a8;
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
          width: 170px;
          height: 40px;
          font-weight: 500;
          font-size: 14px;
          line-height: 14px;
        `;
      default:
        break;
    }
  }}
`;
