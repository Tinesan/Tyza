import React from "react";
import { Button, Modal } from "react-bootstrap";

type Props = {
  body: JSX.Element;
  title: string;
  saveButtonDisabled: boolean;
  onCancel: () => void;
  onSave: () => void;
};

const FormModal = ({
  body,
  title,
  saveButtonDisabled,
  onSave,
  onCancel,
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
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <div>
          <Button variant="secondary" onClick={onCancel}>
            Отменить
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={onSave}
            disabled={saveButtonDisabled}
          >
            Сохранить
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
