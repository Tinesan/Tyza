import React from "react";
import styled from "styled-components";

import { LOCATION_PROTOKOL } from "App";
import Counter from "components/Counter";
import { BasketProduct } from "hooks/useBasketProduct";
import DeleteIcon from "images/icons/deleteIcon.svg";
import TestImage from "images/icons/logo.svg";
import { BasketValue } from "providers/BasketProvider";
import { device } from "ui/media";

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
    object-fit: contain;
  }
`;

const TableData = styled.td<{ width: number }>`
  width: ${({ width }) => `${width}px`};

  @media ${device.mobile} {
    width: auto;
  }
`;

const DeleteIconWrapper = styled.div`
  display: flex;
  margin-left: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

const BasketItem = ({ data, onDelete, onChange }: Props) => {
  const { id, images, price, orderQuantity, name } = data;
  const image = images[images.length - 1]?.uri;
  const imageUrl = image ? `${LOCATION_PROTOKOL}${image}` : TestImage;

  return (
    <tr>
      <TableData width={70}>
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
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
