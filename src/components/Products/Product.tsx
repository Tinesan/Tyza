import React from "react";
import { H5 } from "ui/Title";
import ProductControls from "./ProductControls";
import * as Styled from "./Products.styled";
import TestImage from "images/test.png";

type Props = {};

const Product = ({}: Props) => {
  return (
    <Styled.ProductWrapper>
      <Styled.ProductImage className="mb-2">
        <img src={TestImage} alt="test" />
      </Styled.ProductImage>
      <Styled.ProductTitle>
        <H5>Полуфабрикат Особый № 1</H5>
      </Styled.ProductTitle>
      <Styled.ProductText className="mb-2">
        Состав : мясная обрезь (жира менее 10 %)
      </Styled.ProductText>
      <Styled.ProductText className="mb-2">
        Стоимость за 1 кг.
      </Styled.ProductText>
      <Styled.ProductPrice className="mb-2">1.00 руб.</Styled.ProductPrice>
      <ProductControls id="1" />
    </Styled.ProductWrapper>
  );
};

export default Product;
