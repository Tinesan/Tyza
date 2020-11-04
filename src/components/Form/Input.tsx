import React from "react";
import styled from "styled-components";

import { colors } from "ui/colors";

import { InputKeys, RefReturn } from "./OrderForm";

const InputWrapper = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    padding-left: 15px;
    margin-bottom: 4px;
    font-size: 14px;
    transition-duration: 0.3s;
    color: ${({ hasError }) =>
      hasError ? colors.vividTangerine : `rgba(0, 0, 0, 0.5)`};
  }

  input {
    border: 1px solid;
    border-color: ${({ hasError }) =>
      hasError ? colors.vividTangerine : colors.silk};
    transition-duration: 0.3s;
    border-radius: 30px;
    background-color: transparent;
    outline: none;
    padding: 3px 15px;
    transition-duration: 0.3s;
    color: ${colors.coffee};

    &:focus {
      outline: none;
      box-shadow: 0 0 5px
        ${({ hasError }) => (hasError ? colors.vividTangerine : colors.silk)};
    }
  }
`;

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  hasError: boolean;
  label: keyof typeof InputKeys;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const getCyrillicLabel = (label: keyof typeof InputKeys): string => {
  switch (label) {
    case InputKeys.name:
      return "Ваше имя";
    case InputKeys.phone:
      return "Ваш номер телефона";
    case InputKeys.street:
      return "Улица";
    case InputKeys.building:
      return "Корпус";
    case InputKeys.house:
      return "Дом";
    case InputKeys.flat:
      return "Квартира";
    case InputKeys.floor:
      return "Этаж";
    case InputKeys.frontDoor:
      return "Подъезд";
    default:
      return "";
  }
};

const Input = ({ label, register, required, hasError }: Props) => {
  return (
    <InputWrapper hasError={hasError}>
      <label>
        {getCyrillicLabel(label)}
        {required && "*"}
      </label>
      <input name={label} ref={register({ required })} />
    </InputWrapper>
  );
};

export default Input;
