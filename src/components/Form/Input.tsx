import React from "react";
import InputMask, { ReactInputMask } from "react-input-mask";
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
  register: ({
    required,
  }: {
    required?: boolean;
    pattern?: any;
    validate?: any;
  }) => RefReturn;
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

const isPhoneValid = (value: string) => {
  // const allNumbersInPhoneValue = (value.match(/\d/g) || []).map(Number);
  // const flag = allNumbersInPhoneValue.length === 12 ? undefined : "not valid";
  // return flag;
  const a =
    value &&
    value.match(
      /^[+]?[0-9]{3}[-\s.]?[(][0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/im
    );
  console.log(a);
  return true;
};

export const InputPhone = ({ label, register, required, hasError }: Props) => {
  return (
    <InputWrapper hasError={hasError}>
      <label>
        {getCyrillicLabel(label)}
        {required && "*"}
      </label>
      <InputMask mask="+375 (99) 999-99-99" alwaysShowMask>
        {(inputProps: any) => (
          <input
            ref={register({
              required: true,
              //validate: isPhoneValid,
              pattern: /^[+]?[0-9]{3}[-\s.]?[(][0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/im,
            })}
            name={label}
            {...inputProps}
          />
        )}
      </InputMask>
    </InputWrapper>
  );
};

export default Input;
