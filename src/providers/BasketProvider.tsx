import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export type BasketValue = { [key in ID]: number };

type BasketContext = {
  basketValues: BasketValue;
  addBasketValue: (basketValue: BasketValue) => void;
};

export const BasketContext = React.createContext<BasketContext>({
  basketValues: {},
  addBasketValue: () => console.log,
});

const BasketProvider = ({ children }: Props) => {
  const [basketValues, setBasketValues] = useState<BasketValue>({});

  const addBasketValue = (basketValue: BasketValue) => {
    setBasketValues((pV) => ({ ...pV, ...basketValue }));
  };

  return (
    <BasketContext.Provider
      value={{
        basketValues,
        addBasketValue,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
