import React from "react";
import styled from "styled-components";

import { OrderForm } from "components/Form";
import { device } from "ui/media";
import { H3 } from "ui/Title";

type Props = {
  onClose: () => void;
};

const OrderModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .order-form-button-wrapper {
    @media ${device.tablet} {
      display: flex;
      flex-direction: column-reverse;
      margin-bottom: 0 !important;

      .order-form-button {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

const OrderModal = ({ onClose }: Props) => {
  return (
    <OrderModalWrapper>
      <H3 className="coffee-color mb-4">Оформление заказа</H3>
      <OrderForm />
    </OrderModalWrapper>
  );
};

export default OrderModal;
