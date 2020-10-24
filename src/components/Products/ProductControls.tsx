import React, { useContext, useState } from "react";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import { BasketContext } from "providers/BasketProvider";
import { colors } from "ui/colors";

type Props = {
  id: string;
};

export const ProductControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.coffee};
`;

const CountButton = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  padding: 0;
  border-radius: 50%;
  color: ${colors.coffee};
  background-color: ${colors.white};
  border: 1px solid ${colors.coffee};
  transition-duration: 0.3s;

  &:hover {
    text-shadow: 0 0 0.35px ${colors.coffee}, 0 0 0.35px ${colors.coffee};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Counter = styled.div`
  width: 25px;
  text-align: center;
`;

const ProductControls = ({ id }: Props) => {
  const [orderCount, setOrderCount] = useState<number>(1);
  const { addBasketValue } = useContext(BasketContext);
  const addToBasket = () => {
    addBasketValue({ [id]: orderCount });
  };

  return (
    <ProductControlsWrapper>
      <CounterWrapper>
        <CountButton
          disabled={orderCount === 1}
          onClick={() => {
            setOrderCount(orderCount - 1);
          }}
        >
          -
        </CountButton>
        <Counter>{orderCount}</Counter>
        <CountButton
          onClick={() => {
            setOrderCount(orderCount + 1);
          }}
        >
          +
        </CountButton>
      </CounterWrapper>
      <Button
        text="В КОРЗИНУ"
        size={ButtonSize.SMALL}
        onClick={addToBasket}
        color={ButtonColor.WHITE_WITH_BORDER}
      />
    </ProductControlsWrapper>
  );
};

export default ProductControls;
