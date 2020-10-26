import React from "react";
import styled from "styled-components";

import Counter from "components/Counter";
import { BasketProduct } from "hooks/useBasketProduct";
import DeleteIcon from "images/icons/deleteIcon.svg";
import TestImage from "images/icons/logo.svg";
import { BasketValue } from "providers/BasketProvider";

type Props = {
  data: BasketProduct;
  onDelete: (id: ID) => void;
  onChange: (basketValue: BasketValue) => void;
};

const ImageWrapper = styled.div`
  display: flex;
  max-height: 40px;
  max-width: 70px;

  img {
    max-height: 40px;
    max-width: 70px;
  }
`;

const TableData = styled.td<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

const DeleteIconWrapper = styled.div`
  display: flex;
  margin-left: auto;
  max-width: 30px;
  max-height: 30px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
`;

const BasketItem = ({ data, onDelete, onChange }: Props) => {
  const { id, images, price, orderQuantity, name } = data;
  const image = images[0]?.uri;
  return (
    <tr>
      <TableData width={70}>
        <ImageWrapper>
          <img src={image ? `http://${image}` : TestImage} alt={name} />
        </ImageWrapper>
      </TableData>
      <TableData width={200}>{name}</TableData>
      <TableData width={100}>
        <Counter
          value={orderQuantity}
          onChange={(value) => onChange({ [id]: value })}
        />
      </TableData>
      <TableData width={90}>{price * orderQuantity} руб.</TableData>
      <TableData width={50}>
        <DeleteIconWrapper onClick={() => onDelete(id)}>
          <img src={DeleteIcon} alt="удалить" />
        </DeleteIconWrapper>
      </TableData>
    </tr>
  );
};

export default BasketItem;
