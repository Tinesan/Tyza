import { BasketContext } from "providers/BasketProvider";
import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "ui/colors";

type Props = {};

const BasketResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeliveryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.5;
  font-size: 18px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.coffee};
`;

const BasketResult = () => {
  const { totalPrice } = useContext(BasketContext);

  return (
    <BasketResultWrapper>
      <DeliveryWrapper>
        <span>Доставка</span>
        <span>0.00 руб</span>
      </DeliveryWrapper>
      <TotalPriceWrapper>
        <span>К оплате</span>
        <span>{totalPrice}</span>
      </TotalPriceWrapper>
    </BasketResultWrapper>
  );
};

export default BasketResult;
