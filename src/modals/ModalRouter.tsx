import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "ui/colors";
import BasketModal from "./BasketModal";
import CloseIcon from "images/icons/closeIcon.svg";

import useModal, { MODAL_NAMES, TModalName } from "./hooks";
import OrderModal from "./OrderModal";

const ModalWrapper = styled.div`
  position: relative;
  padding: 75px 100px;
  background-color: ${colors.roseWhite};
  border-radius: 10px;
`;

const MODALS: {
  [key in TModalName]: (
    value: Required<{ onClose: () => void }>
  ) => JSX.Element;
} = {
  [MODAL_NAMES.basketModal]: BasketModal,
  [MODAL_NAMES.orderModal]: OrderModal,
};

const CloseButton = styled.div`
  position: absolute;
  top: 40px;
  right: 45px;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const ModalRouter = () => {
  const { closeModal, modalQueryParams } = useModal();
  const [showModal, setShowModal] = useState<boolean>(true);

  const onClose = () => {
    setShowModal(false);
    closeModal();
  };

  const ModalWindow = MODALS[modalQueryParams.modal as TModalName];

  if (!ModalWindow) return null;

  return (
    <Modal show={showModal} size="lg" centered onHide={onClose}>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <img src={CloseIcon} alt="closeIcon" />
        </CloseButton>
        <ModalWindow onClose={onClose} />
      </ModalWrapper>
    </Modal>
  );
};

export default ModalRouter;
