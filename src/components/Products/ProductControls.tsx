import React, { useContext, useState } from "react";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import Counter from "components/Counter";
import { BasketContext } from "providers/BasketProvider";

type Props = {
  id: string;
};

export const ProductControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <ProductControlsWrapper>
      <Counter startValue={orderCount} onChange={onCounterChagne} />
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
