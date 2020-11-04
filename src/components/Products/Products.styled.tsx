import styled from "styled-components";

import { colors } from "ui/colors";

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

  &:hover {
    ${ProductTitle} {
      opacity: 0.7;
    }
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
