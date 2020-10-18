import React, { ReactNode } from "react";

import { BeefFeedDto, useProductsQuery } from "generated/graphql";

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
