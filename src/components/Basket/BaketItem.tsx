import Counter from "components/Counter";
import React from "react";
import styled from "styled-components";
import { TBasketItem } from "./helpers";
import DeleteIcon from "images/icons/deleteIcon.svg";
import { BasketValue } from "providers/BasketProvider";

type Props = {
  data: TBasketItem;
  onDelete: (id: ID) => void;
  onChange: (basketValue: BasketValue) => void;
};

const ImageWrapper = styled.div`
  display: flex;
  max-width: 70px;
  img {
    max-width: 100%;
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
  const { id, img, price, count, name } = data;

  return (
    <tr>
      <TableData width={70}>
        <ImageWrapper>
          {/* <img src={`data:image/jpeg;base64,${img}`} alt={name} /> */}
        </ImageWrapper>
      </TableData>
      <TableData width={200}>{name}</TableData>
      <TableData width={100}>
        <Counter
          value={count}
          onChange={(value) => onChange({ [id]: value })}
        />
      </TableData>
      <TableData width={90}>{price * count} руб.</TableData>
      <TableData width={50}>
        <DeleteIconWrapper onClick={() => onDelete(id)}>
          <img src={DeleteIcon} alt="удалить" />
        </DeleteIconWrapper>
      </TableData>
    </tr>
  );
};

export default BasketItem;
