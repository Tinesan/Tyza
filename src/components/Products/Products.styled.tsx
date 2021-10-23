import styled from "styled-components";

import { colors } from "ui/colors";
import { device } from "ui/media";

export const ProductTitle = styled.div`
  opacity: 0.55;
  transition-duration: 0.3s;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 1px 0 0 0 ${colors.pearlBush}, 0 1px 0 0 ${colors.pearlBush},
    1px 1px 0 0 ${colors.pearlBush}, 1px 0 0 0 ${colors.pearlBush} inset,
    0 1px 0 0 ${colors.pearlBush} inset;
  padding: 15px 10px;
  border-radius: 10px;
  transition-duration: 0.3s;

  &:hover {
    background-color: rgba(235, 223, 215, 0.35);
  }

  @media ${device.mobile} {
    border-radius: 0px;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  height: 130px;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const ProductText = styled.div`
  font-size: 14px;
  opacity: 0.5;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.coffee};
`;
