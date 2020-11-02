import React, { useContext, useState } from "react";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import Counter from "components/Counter";
import BIcon from "images/icons/basketIcon.svg";
import { BasketContext } from "providers/BasketProvider";

type Props = {
  id: string;
};

export const ProductControlsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 30px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ProductControls = ({ id }: Props) => {
  const { addBasketValue } = useContext(BasketContext);
  const [orderCount, setOrderCount] = useState(1);

  const addToBasket = () => {
    addBasketValue({ [id]: orderCount });
  };

  const onCounterChagne = (count: number) => {
    setOrderCount(count);
  };

  return (
    <ProductControlsWrapper className="justify-content-between">
      <Counter value={orderCount} onChange={onCounterChagne} />
      <Button
        text="В КОРЗИНУ"
        onClick={addToBasket}
        size={ButtonSize.SMALL}
        className="d-none d-xl-block"
        color={ButtonColor.WHITE_WITH_BORDER}
      />
      <BasketWrapper className="d-flex d-xl-none" onClick={addToBasket}>
        <img src={BIcon} alt="BasketIcon" />
      </BasketWrapper>
    </ProductControlsWrapper>
  );
};

export default ProductControls;
