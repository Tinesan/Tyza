import React from "react";
import styled from "styled-components";
import { colors } from "ui/colors";
import { InputKeys, RefReturn } from "./OrderForm";

type Props = {
  register: () => RefReturn;
};

const RadioWrapper = styled.div`
  display: flex;
`;

const RadioItemLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  color: ${colors.coffee};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    box-sizing: border-box;
    border: 2px solid ${colors.coffee};
    background-color: ${colors.white};
    border-radius: 50%;

    &::after {
      content: "";
      top: 1px;
      left: 1px;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      background: ${colors.coffee};
      position: absolute;
      display: none;
    }
  }

  &:hover {
    input ~ .checkmark {
      background-color: ${colors.ebb};
    }
  }

  input:checked ~ .checkmark {
    background-color: ${colors.white};

    &:after {
      display: block;
    }
  }
`;

export const RADIO_VALUES = {
  firstValue: "12.00-18.00",
  secondValue: "18.00-22.00",
};

const TimeRadio = ({ register }: Props) => {
  const { firstValue, secondValue } = RADIO_VALUES;

  return (
    <RadioWrapper>
      <RadioItemLabel className={`mr-4 }`}>
        {firstValue}
        <input
          type="radio"
          ref={register}
          value={firstValue}
          name={InputKeys.deliveryTime}
        />
        <span className="checkmark"></span>
      </RadioItemLabel>
      <RadioItemLabel>
        {secondValue}
        <input
          type="radio"
          ref={register}
          value={secondValue}
          name={InputKeys.deliveryTime}
        />
        <span className="checkmark"></span>
      </RadioItemLabel>
    </RadioWrapper>
  );
};

export default TimeRadio;
