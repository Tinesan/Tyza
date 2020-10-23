import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import useModal from "./helpers";

const ModalRouter = () => {
  const { closeModal, modalQueryParams } = useModal();
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <Modal
      show={showModal}
      size="lg"
      centered
      onHide={() => {
        setShowModal(false);
        closeModal();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>1111</Modal.Title>
      </Modal.Header>
      <Modal.Body>222</Modal.Body>
      <Modal.Footer>footer</Modal.Footer>
    </Modal>
  );
};

export default ModalRouter;
