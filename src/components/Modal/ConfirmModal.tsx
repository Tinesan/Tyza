import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/esm/Modal";

type Props = {
  body?: JSX.Element;
  title: string;
  confirmButtonDisabled?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({
  body,
  title,
  confirmButtonDisabled,
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <Modal
      show
      size="lg"
      centered
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {body && <Modal.Body>{body}</Modal.Body>}
      <Modal.Footer>
        <div>
          <Button variant="secondary" onClick={onCancel}>
            Отменить
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={onConfirm}
            disabled={confirmButtonDisabled}
          >
            Подтвердить
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
