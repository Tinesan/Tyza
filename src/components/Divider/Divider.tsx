import React from "react";
import styled from "styled-components";
import { device } from "ui/media";

type Props = {
  size: number;
  className?: string;
};

const DividerHeight = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};

  @media ${device.mobile} {
    height: ${({ height }) => `${height * 0.5}px`};
  }
`;

const Divider = ({ size, className }: Props) => {
  return <DividerHeight height={size} className={className} />;
};

export default Divider;
