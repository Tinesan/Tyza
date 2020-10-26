import React from "react";

import { StyledButton } from "./Button.styled";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  color: TButtonColor;
  size: TButtonSize;
  onClick: () => void;
  className?: string;
};

export const ButtonColor = {
  TRANSPARENT: "transparent",
  WHITE: "white",
  LIGHT: "light",
  WHITE_WITH_BORDER: "whiteWithBorder",
  COFFEE_GRADIENT: "coffee-gradient",
} as const;

export type TButtonColor = typeof ButtonColor[keyof typeof ButtonColor];

export const ButtonSize = {
  SMALL: "SMALL",
  LARGE: "LARGE",
} as const;

export type TButtonSize = keyof typeof ButtonSize;

const Button = ({
  color,
  size,
  text,
  className,
  onClick,
  ...buttonProps
}: Props) => {
  const { disabled } = buttonProps;

  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;
