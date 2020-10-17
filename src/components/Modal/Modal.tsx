import React from "react";
import { Button, Modal as BModal } from "react-bootstrap";

type Props = {
  body: JSX.Element;
  title: string;
  saveButtonDisabled: boolean;
  onCancel: () => void;
  onSave: () => void;
};

const Modal = ({
  body,
  title,
  saveButtonDisabled,
  onCancel,
  onSave,
}: Props) => {
  return (
    <BModal
      show
      size="lg"
      centered
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <BModal.Header closeButton>
        <BModal.Title>{title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{body}</BModal.Body>
      <BModal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отменить
        </Button>
        <Button
          variant="primary"
          onClick={onSave}
          disabled={saveButtonDisabled}
        >
          Сохранить
        </Button>
      </BModal.Footer>
    </BModal>
  );
};

export default Modal;
