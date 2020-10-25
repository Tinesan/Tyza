import React, { useCallback, useContext } from "react";
import BasketItemC from "./BaketItem";
import { BasketItem } from "./helpers";
import styled from "styled-components";
import { BasketContext } from "providers/BasketProvider";

type Props = {
  data: BasketItem[];
};

const STable = styled.table`
  table-layout: fixed;
  width: 100%;
  td:not(:first-child) {
    padding-left: 15px;
  }
`;

const BasketList = ({ data }: Props) => {
  const { deleteBasketValue, addBasketValue } = useContext(BasketContext);

  return (
    <STable>
      <tbody>
        {data.map((baketItem) => (
          <BasketItemC
            key={baketItem.id}
            data={baketItem}
            onChange={addBasketValue}
            onDelete={deleteBasketValue}
          />
        ))}
      </tbody>
    </STable>
  );
};

export default BasketList;
