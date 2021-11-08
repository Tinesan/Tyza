import React, { useCallback } from "react";
import styled from "styled-components";

import { colors } from "ui/colors";
import { device } from "ui/media";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.coffee};
`;

const CountButton = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  padding: 0;
  border-radius: 50%;
  color: ${colors.coffee};
  background-color: ${colors.white};
  border: 1px solid ${colors.coffee};
  transition-duration: 0.3s;

  &:hover {
    text-shadow: 0 0 0.35px ${colors.coffee}, 0 0 0.35px ${colors.coffee};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media ${device.mobile} {
    width: 24px;
    height: 24px;
    align-items: baseline;
  }
`;

const CounterValue = styled.div`
  text-align: center;

  input {
    width: 26px;
    font-size: 16px;
    color: ${colors.coffee};
    border: none;
    text-align: center;
    transition-duration: 0.3s;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Counter = ({ value, onChange }: Props) => {
  const increment = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const decrement = useCallback(() => {
    onChange(value - 1);
  }, [onChange, value]);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = +e.target.value;
      if (value > 99) return;
      if (typeof value === "number") {
        onChange(Math.abs(value));
      }
    },
    [onChange]
  );

  return (
    <CounterWrapper>
      <CountButton disabled={value < 1} onClick={decrement}>
        -
      </CountButton>
      <CounterValue>
        <input
          type="number"
          onChange={onInputChange}
          value={!!value ? value : ""}
        />
      </CounterValue>
      <CountButton disabled={value >= 99} onClick={increment}>
        +
      </CountButton>
    </CounterWrapper>
  );
};

export default Counter;
