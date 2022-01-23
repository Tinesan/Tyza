import React, { useContext, useState } from "react";
import styled from "styled-components";

import { BasketList } from "components/Basket";
import BasketResult from "components/Basket/BasketResult";
import Button, { ButtonColor, ButtonSize } from "components/Button";
import useBasketProduct from "hooks/useBasketProduct";
import SadCat from "images/sadCat.png";
import { BasketContext } from "providers/BasketProvider";
import { colors } from "ui/colors";
import { device } from "ui/media";
import { H3 } from "ui/Title";

import useModal from "./hooks";
import { Row, Col, Container } from "react-bootstrap";
import Product from "components/Products/Product";

type Props = {
  onClose: () => void;
};

const BasketModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketListWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 2px solid ${colors.ebb};
  @media ${device.mobile} {
    padding-bottom: 0px;
  }
`;

const Suggestions = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const SuggestionsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  color: #737373;
  font-weight: 600;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalFooter = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  > div {
    width: calc(50% - 15px);
    flex-shrink: 0;

    @media ${device.tablet} {
      width: auto;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 20px;
    ${ButtonWrapper} {
      margin-top: 20px;
      justify-content: center;
    }
  }
`;

const ResultWrapper = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 150px;
    max-height: 150px;
  }
`;

const StyledCol = styled(Col)`
  padding: 0 6px;

  @media ${device.mobile} {
    padding: 0;
  }
`;

const StyledRow = styled(Row)`
  margin-left: -21px;
  margin-right: -21px;
`;

export const DELIVERY_PRICE = 5;
export const MIN_PRICE_FOR_ORDER = 30;
export const PRICE_FOR_FREE_DELIVERY = 45;

const BasketModal = ({ onClose }: Props) => {
  const { openModal } = useModal();
  const { totalPrice } = useContext(BasketContext);
  const { basketProducts, suggestions } = useBasketProduct();
  const isBasketEmpty = !basketProducts.length;
  const isPriceMoreMinimum = totalPrice >= MIN_PRICE_FOR_ORDER;
  const canCreateOrder = !isBasketEmpty && isPriceMoreMinimum;
  const [currentSuggestions] = useState(suggestions);

  return (
    <BasketModalWrapper>
      <H3
        className={`coffee-color mb-4 ${isBasketEmpty ? " text-center" : ""}`}
      >
        Ваша корзина {isBasketEmpty && "пока пуста"}
      </H3>
      {isBasketEmpty && (
        <ImageWrapper>
          <img src={SadCat} alt="sad-cat" />
        </ImageWrapper>
      )}
      <BasketListWrapper>
        <BasketList data={basketProducts} />
      </BasketListWrapper>
      <ModalFooter>
        {!isBasketEmpty && (
          <ResultWrapper>
            {isPriceMoreMinimum ? (
              <BasketResult />
            ) : (
              <span className="coffee-color">
                Минимальная сумма заказа - {MIN_PRICE_FOR_ORDER} рублей
              </span>
            )}
          </ResultWrapper>
        )}
        <ButtonWrapper
          className={isBasketEmpty ? "d-flex w-100 justify-content-center" : ""}
        >
          <Button
            size={ButtonSize.LARGE}
            color={ButtonColor.COFFEE_GRADIENT}
            text={canCreateOrder ? "ОФОРМИТЬ ЗАКАЗ" : "Вернуться к заказу"}
            onClick={() =>
              canCreateOrder ? openModal("orderModal") : onClose()
            }
          />
        </ButtonWrapper>
      </ModalFooter>
      <Suggestions>
        <StyledRow>
          <StyledCol>
            <SuggestionsTitle>Добавьте к вашему заказу: </SuggestionsTitle>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          {currentSuggestions.slice(0, 4).map((p, inx) => (
            <StyledCol
              className={inx === 3 ? "d-block d-md-none" : ""}
              xs={6}
              md={4}
              key={p.id}
            >
              <Product short product={p} />
            </StyledCol>
          ))}
        </StyledRow>
      </Suggestions>
    </BasketModalWrapper>
  );
};

export default BasketModal;
