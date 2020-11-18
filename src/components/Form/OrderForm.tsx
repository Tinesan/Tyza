import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button, { ButtonColor, ButtonSize } from "components/Button";
import {
  ProductOrderLineInputDto,
  usePlaceOrderMutation,
} from "generated/graphql";
import useBasketProduct, { BasketProduct } from "hooks/useBasketProduct";
import useModal from "modals/hooks";
import { BasketContext } from "providers/BasketProvider";
import { colors } from "ui/colors";

import Input, { InputPhone } from "./Input";
import Textarea from "./Textarea";
import TimeRadio, { RADIO_VALUES } from "./TimeRadio";

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

const TotalPriceWrapper = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
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
  deliveryTime: string;
  comment: string;
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
  deliveryTime: "deliveryTime",
  comment: "comment",
} as const;

const getProductOrderLines = (
  basketProducts: BasketProduct[]
): ProductOrderLineInputDto[] => {
  return basketProducts.map((product) => {
    const { id, name, price, description, costPer, orderQuantity } = product;
    const ProductOrderLine: ProductOrderLineInputDto = {
      name,
      price,
      costPer,
      productId: id,
      orderQuantity,
      description: description || "",
    };
    return ProductOrderLine;
  });
};

const OrderForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [placeOrder, { loading: placeOrderLoading }] = usePlaceOrderMutation();
  const { openModal } = useModal();
  const { basketProducts } = useBasketProduct();
  const { totalPrice, deliveryPrice } = useContext(BasketContext);
  const { register, handleSubmit, control, errors } = useForm<Inputs>({
    defaultValues: {
      deliveryTime: RADIO_VALUES.firstValue,
    },
  });
  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    const { deliveryTime, comment, ...customer } = data;
    const productOrderLines = getProductOrderLines(basketProducts);
    try {
      await placeOrder({
        variables: {
          customer,
          deliveryTime,
          productOrderLines,
        },
      });
      openModal("orderResult");
    } catch (error) {
      openModal("orderResult", { failed: 1 });
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <Col>
          <InputPhone
            required
            control={control}
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
          <TextBold className="mb-2">Время доставки*</TextBold>
          <TimeRadio register={register} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <TextBold className="mb-2">Добавьте комментарий к заказу</TextBold>
          <Textarea
            rows={2}
            style={{ resize: "none" }}
            name={InputKeys.comment}
            register={register}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="d-flex justify-content-end">
          <TotalPriceWrapper>
            <span className="mr-5 font-weight-normal">К оплате</span>
            <span className="coffee-color bold">
              {totalPrice + deliveryPrice}
            </span>
          </TotalPriceWrapper>
        </Col>
      </Row>
      <Row className="mb-4 order-form-button-wrapper">
        <Col xs={12} lg={6}>
          <Button
            className="order-form-button"
            text="НАЗАД В КОРЗИНУ"
            size={ButtonSize.LARGE}
            color={ButtonColor.WHITE_WITH_BORDER}
            onClick={() => openModal("backetModal")}
          />
        </Col>
        <Col xs={12} lg={6}>
          <div className="d-flex justify-content-end">
            <Button
              className="order-form-button"
              text="ОФОРМИТЬ ЗАКАЗ"
              size={ButtonSize.LARGE}
              onClick={handleSubmit(onSubmit)}
              color={ButtonColor.COFFEE_GRADIENT}
              disabled={placeOrderLoading || loading}
            />
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default OrderForm;
