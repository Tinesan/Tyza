import React, { ReactNode, useMemo } from "react";

import { useCategoriesAndProductsQuery } from "generated/graphql";

type Props = {
  children: ReactNode;
};

export const DataContext = React.createContext<{ products: any[] }>({
  products: [],
});

const DataProvider = ({ children }: Props) => {
  //const { data } = useCategoriesAndProductsQuery();
  const products = useMemo(() => {
    return [];
  }, []);

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
