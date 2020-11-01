import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

import CloseIcon from "images/icons/closeIcon.svg";
import { colors } from "ui/colors";

import BasketModal from "./BasketModal";
import CallModal from "./CallModal";
import useModal, { MODAL_NAMES, TModalName } from "./hooks";
import OrderModal from "./OrderModal";
import OrderResult from "./OrderResult";

const ModalWrapper = styled.div`
  position: relative;
  padding: 75px 100px;
  background-color: ${colors.roseWhite};
  border-radius: 10px;
`;

const MODALS: {
  [key in TModalName]: (
    value: Required<{ onClose?: () => void; modalQueryParams?: any }>
  ) => JSX.Element;
} = {
  [MODAL_NAMES.basketModal]: BasketModal,
  [MODAL_NAMES.orderModal]: OrderModal,
  [MODAL_NAMES.orderResult]: OrderResult,
  [MODAL_NAMES.callModal]: CallModal,
};

const CloseButton = styled.div`
  position: absolute;
  top: 40px;
  right: 45px;
  transition-duration: 0.3s;
  cursor: pointer;
  opacity: 0.5;

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
  const { dialogClassName } = modalQueryParams;
  console.log("dialogClassName", dialogClassName);
  return (
    <Modal
      show={showModal}
      size="lg"
      centered
      onHide={onClose}
      dialogClassName={dialogClassName}
    >
      <ModalWrapper className="modal-wrapper">
        <CloseButton onClick={onClose}>
          <img src={CloseIcon} alt="closeIcon" />
        </CloseButton>
        <ModalWindow onClose={onClose} {...modalQueryParams} />
      </ModalWrapper>
    </Modal>
  );
};

export default ModalRouter;
