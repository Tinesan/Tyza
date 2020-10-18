import React from "react";
import styled from "styled-components";

type Props = {
  size: number;
};

const DividerHeight = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
`;

const Divider = ({ size }: Props) => {
  return <DividerHeight height={size} />;
};

export default Divider;
