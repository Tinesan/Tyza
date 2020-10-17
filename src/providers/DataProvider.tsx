import { useProductsQuery } from "generated/graphql";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DataContext = React.createContext<{ products: any[] }>({
  products: [],
});

const DataProvider = ({ children }: Props) => {
  const { data } = useProductsQuery();

  return (
    <DataContext.Provider
      value={{
        products: data?.listBeefFeed || [],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
