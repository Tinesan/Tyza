import { BeefFeedDto, useProductsQuery } from "generated/graphql";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DataContext = React.createContext<{ products: BeefFeedDto[] }>({
  products: [],
});

const DataProvider = ({ children }: Props) => {
  const { data } = useProductsQuery();
  const products = data?.listBeefFeed || [];

  return (
    <DataContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
