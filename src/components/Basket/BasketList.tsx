import React, { useContext } from "react";
import styled from "styled-components";

import { BasketProduct } from "hooks/useBasketProduct";
import { BasketContext } from "providers/BasketProvider";

import BasketItemC from "./BasketItem";

type Props = {
  data: BasketProduct[];
};

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  td:not(:first-child) {
    padding-left: 15px;
  }

  tr:not(:last-child) {
    td {
      padding-bottom: 10px;
    }
  }
`;

const BasketList = ({ data }: Props) => {
  const { deleteBasketValue, addBasketValue } = useContext(BasketContext);

  return (
    <Table>
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
    </Table>
  );
};

export default BasketList;
