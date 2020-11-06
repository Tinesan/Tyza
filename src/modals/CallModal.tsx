import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import Input, { InputPhone } from "components/Form/Input";
import { useCallRequestQuery } from "generated/graphql";
import Success from "images/icons/success.svg";

type Props = {
  onClose: () => void;
};

const CallModalWrapper = styled.div``;

const CallModalText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

type Inputs = {
  name: string;
  phone: string;
};

export const InputKeys = {
  name: "name",
  phone: "phone",
} as const;

type ResultValue = {
  showResult: boolean;
  resultError: boolean;
};

const CallModal = ({ onClose }: Props) => {
  const [idLoading, setIsLoading] = useState<boolean>(false);
  const { refetch: callRequest } = useCallRequestQuery({ skip: true });
  const { register, handleSubmit, errors, control } = useForm<Inputs>();
  const [{ showResult, resultError }, setResultModal] = useState<ResultValue>({
    showResult: false,
    resultError: false,
  });

  const onSubmit = async ({ name, phone }: Inputs) => {
    setIsLoading(true);
    try {
      await callRequest({ name, phone });
      setResultModal({ showResult: true, resultError: false });
    } catch (error) {
      setResultModal({ showResult: true, resultError: true });
    } finally {
      setIsLoading(false);
    }
  };
  if (showResult) {
    return (
      <CallModalWrapper>
        {!resultError ? (
          <>
            <ImageWrapper>
              <img src={Success} alt="order-result-logo" />
            </ImageWrapper>
            <CallModalText className="coffee-color">Спасибо!</CallModalText>
            <CallModalText className="coffee-color">
              Мы скоро Вам перезвоним.
            </CallModalText>{" "}
          </>
        ) : (
          <CallModalText className="coffee-color">
            Извините, произошла ошибка
          </CallModalText>
        )}
        <ButtonWrapper>
          <Button
            text="ok"
            size={ButtonSize.LARGE}
            onClick={onClose}
            color={ButtonColor.COFFEE_GRADIENT}
          />
        </ButtonWrapper>
      </CallModalWrapper>
    );
  }
  return (
    <CallModalWrapper>
      <CallModalText className="coffee-color mb-4">
        Оставьте пожалуйста номер телефона и мы скоро Вам перезвоним.
      </CallModalText>
      <form onSubmit={(e) => e.preventDefault()}>
        <Row className="mb-4">
          <Col>
            <Input
              required
              label={InputKeys.name}
              register={register}
              hasError={!!errors[InputKeys.name]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputPhone
              required
              control={control}
              label={InputKeys.phone}
              hasError={!!errors[InputKeys.phone]}
            />
          </Col>
        </Row>
      </form>
      <ButtonWrapper>
        <Button
          text="Жду звонка"
          disabled={idLoading}
          size={ButtonSize.LARGE}
          onClick={handleSubmit(onSubmit)}
          color={ButtonColor.COFFEE_GRADIENT}
        />
      </ButtonWrapper>
    </CallModalWrapper>
  );
};

export default CallModal;
