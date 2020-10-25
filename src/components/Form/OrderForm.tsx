import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "./Input";
import styled from "styled-components";
import { colors } from "ui/colors";
import Radio from "./Radio";

const TextBold = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.coffee};
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${colors.coffee};
`;

export type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type Inputs = {
  name: string;
  phone: string;
  street: string;
  house: string;
  building: string;
  flat: string;
  floor: string;
  frontDoor: string;
  time: string;
};

export const InputKeys = {
  name: "name",
  phone: "phone",
  street: "street",
  house: "house",
  building: "building",
  flat: "flat",
  floor: "floor",
  frontDoor: "frontDoor",
  time: "time",
} as const;

const OrderForm = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>({
    defaultValues: {
      time: "12.00-18.00",
    },
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  const currentTime = watch("time");

  console.log("currentTime", currentTime);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-4">
        <Col>
          <Input
            required
            label={InputKeys.name}
            register={register}
            hasError={!!errors[InputKeys.name]}
          />
        </Col>
        <Col>
          <Input
            required
            register={register}
            label={InputKeys.phone}
            hasError={!!errors[InputKeys.phone]}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <TextBold>Адрес доставки по Минску</TextBold>
          <Text>
            (Доставка за пределы МКАД возможна после согласования с менеджером)
          </Text>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col sm="6">
          <Input
            required
            label={InputKeys.street}
            register={register}
            hasError={!!errors[InputKeys.street]}
          />
        </Col>
        <Col sm="3">
          <Input
            required
            label={InputKeys.house}
            register={register}
            hasError={!!errors[InputKeys.house]}
          />
        </Col>
        <Col sm="3">
          <Input
            label={InputKeys.building}
            register={register}
            hasError={!!errors[InputKeys.building]}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col sm="3">
          <Input
            label={InputKeys.flat}
            register={register}
            hasError={!!errors[InputKeys.flat]}
          />
        </Col>
        <Col sm="3">
          <Input
            label={InputKeys.frontDoor}
            register={register}
            hasError={!!errors[InputKeys.frontDoor]}
          />
        </Col>
        <Col sm="3">
          <Input
            label={InputKeys.floor}
            register={register}
            hasError={!!errors[InputKeys.floor]}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <TextBold>Время доставки*</TextBold>
          <Radio value={currentTime} register={register} />
        </Col>
      </Row>

      <Row className="mb-4">
        <input type="submit" />
      </Row>
    </form>
  );
};

export default OrderForm;
