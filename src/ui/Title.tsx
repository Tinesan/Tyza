import styled from "styled-components";

import { device } from "./media";

export const H2 = styled.h2`
  font-size: 50px;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

export const H3 = styled.h3`
  font-size: 36px;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const H5 = styled.h5`
  font-size: 17px;
  font-weight: 800;
`;
