import React from "react";

import { ProductItemFragment } from "generated/graphql";
import TestImage from "images/icons/logo.svg";
import { H5 } from "ui/Title";

import ProductControls from "./ProductControls";
import * as Styled from "./Products.styled";

type Props = {
  product: ProductItemFragment;
};

const Product = ({ product }: Props) => {
  const { name, description, costPer, price, images } = product;
  const hasImage = images[0]?.name;
  const productImage = hasImage
    ? `data:image/jpeg;base64,${images[0]?.image}`
    : TestImage;

  return (
    <Styled.ProductWrapper>
      <Styled.ProductImage className="mb-2">
        <img src={productImage} alt="test" />
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
