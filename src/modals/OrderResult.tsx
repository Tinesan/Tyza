import React from "react";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import Success from "images/icons/success.svg";
import { H3 } from "ui/Title";

type Props = any & {
  onClose: () => void;
};

const OrderResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  max-width: 120px;
  max-height: 120px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 70px;
`;

const OrderResult = ({ onClose, ...modalQueryParams }: Props) => {
  const isOrderFailed = modalQueryParams?.failed;
  return (
    <OrderResultWrapper>
      {isOrderFailed ? (
        <>
          <H3 className="coffee-color mb-0">К сожалению, произошла ошибка</H3>
          <H3 className="coffee-color mb-0">Попробуйте снова</H3>
        </>
      ) : (
        <>
          <ImageWrapper>
            <img src={Success} alt="order-result-logo" />
          </ImageWrapper>
          <H3 className="coffee-color mb-0">Спасибо за заказ!</H3>
          <div className="pr-4 pl-4">
            <H3 className="coffee-color mb-0">
              Ожидайте, скоро наш менеджер свяжется с Вами.
            </H3>
          </div>
        </>
      )}
      <ButtonWrapper>
        <Button
          size={ButtonSize.LARGE}
          color={ButtonColor.COFFEE_GRADIENT}
          text="OK"
          onClick={onClose}
        />
      </ButtonWrapper>
    </OrderResultWrapper>
  );
};

export default OrderResult;
