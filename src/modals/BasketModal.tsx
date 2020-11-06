import React, { useContext } from "react";
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

const BasketModal = ({ onClose }: Props) => {
  const { openModal } = useModal();
  const { totalPrice } = useContext(BasketContext);
  const { basketProducts } = useBasketProduct();
  const isBasketEmpty = !basketProducts.length;
  const isPriceMoreMinimum = totalPrice > 25;
  const canCreateOrder = !isBasketEmpty && isPriceMoreMinimum;
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
                Минимальная сумма заказа - 25 рублей
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
    </BasketModalWrapper>
  );
};

export default BasketModal;
