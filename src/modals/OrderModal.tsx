import React from "react";
import styled from "styled-components";
import { H3 } from "ui/Title";

type Props = {
  onClose: () => void;
};

const OrderModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderModal = ({ onClose }: Props) => {
  return (
    <OrderModalWrapper>
      <H3 className="coffee-color mb-4">Заказ</H3>
    </OrderModalWrapper>
  );
};

export default OrderModal;
