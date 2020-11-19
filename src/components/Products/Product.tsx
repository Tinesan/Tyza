import React from "react";

import { ProductItemFragment } from "generated/graphql";
import TestImage from "images/icons/logo.svg";
import { H5 } from "ui/Title";

import ProductControls from "./ProductControls";
import * as Styled from "./Products.styled";
import { LOCATION_PROTOKOL } from "App";

type Props = {
  product: ProductItemFragment;
};

const Product = ({ product }: Props) => {
  const { id, name, description, costPer, price, images } = product;
  const image = images[images.length - 1]?.uri;
  const imageUrl = image ? `${LOCATION_PROTOKOL}${image}` : TestImage;

  return (
    <Styled.ProductWrapper>
      <Styled.ProductImage className="mb-2">
        <img src={imageUrl} alt="test" />
      </Styled.ProductImage>
      <Styled.ProductTitle>
        <H5>{name}</H5>
      </Styled.ProductTitle>
      <Styled.ProductText className="mb-2 flex-grow-1">
        {description}
      </Styled.ProductText>
      <Styled.ProductText className="mb-2">
        Стоимость за {costPer}
      </Styled.ProductText>
      <Styled.ProductPrice className="mb-2">{price} руб.</Styled.ProductPrice>
      <ProductControls id={id} />
    </Styled.ProductWrapper>
  );
};

export default Product;
