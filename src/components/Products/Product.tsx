import React from "react";

import { ProductItemFragment } from "generated/graphql";
import TestImage from "images/test.png";
import { H5 } from "ui/Title";

import ProductControls from "./ProductControls";
import * as Styled from "./Products.styled";

type Props = {
  product: ProductItemFragment;
};

const Product = ({ product }: Props) => {
  const { name, description, costPer, price } = product;
  return (
    <Styled.ProductWrapper>
      <Styled.ProductImage className="mb-2">
        <img src={TestImage} alt="test" />
      </Styled.ProductImage>
      <Styled.ProductTitle>
        <H5>{name}</H5>
      </Styled.ProductTitle>
      <Styled.ProductText className="mb-2">{description}</Styled.ProductText>
      <Styled.ProductText className="mb-2">
        Стоимость за {costPer}
      </Styled.ProductText>
      <Styled.ProductPrice className="mb-2">{price} руб.</Styled.ProductPrice>
      <ProductControls id="1" />
    </Styled.ProductWrapper>
  );
};

export default Product;
