import React from "react";
import styled from "styled-components";
import { InputKeys, RefReturn } from "./OrderForm";

type Props = {
  value: typeof RADIO_VALUES[keyof typeof RADIO_VALUES];
  register: () => RefReturn;
};

const RadioWrapper = styled.div`
  display: flex;
`;

const RadioItemLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0;

  input[type="radio"] {
    margin-right: 8px;
  }

  p {
    margin: 0;
  }
`;

const RADIO_VALUES = {
  firstValue: "12.00-18.00",
  secondValue: "18.00-22.00",
};

const Radio = ({ register, value }: Props) => {
  const { firstValue, secondValue } = RADIO_VALUES;

  return (
    <RadioWrapper>
      <RadioItemLabel
        className={`mr-4 ${firstValue === value ? "active" : undefined}`}
      >
        <input
          name={InputKeys.time}
          type="radio"
          value={firstValue}
          ref={register}
        />
        <p>{firstValue}</p>
      </RadioItemLabel>
      <RadioItemLabel
        className={`${secondValue === value ? "active" : undefined}`}
      >
        <input
          name={InputKeys.time}
          type="radio"
          value={secondValue}
          ref={register}
        />
        <p>{secondValue}</p>
      </RadioItemLabel>
    </RadioWrapper>
  );
};

export default Radio;
