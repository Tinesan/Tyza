import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "ui/colors";

type Props = {
  startValue: number;
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
`;

const CounterValue = styled.div`
  width: 25px;
  text-align: center;
`;

const Counter = ({ startValue, onChange }: Props) => {
  const [count, setCount] = useState<number>(startValue);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <CounterWrapper>
      <CountButton disabled={count === 1} onClick={decrement}>
        -
      </CountButton>
      <CounterValue>{count}</CounterValue>
      <CountButton onClick={increment}>+</CountButton>
    </CounterWrapper>
  );
};

export default Counter;
