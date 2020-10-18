import React, { ReactNode } from "react";

import { useCategoriesQuery } from "generated/graphql";

type Props = {
  children: ReactNode;
};

export const DataContext = React.createContext<{ products: any[] }>({
  products: [],
});

const DataProvider = ({ children }: Props) => {
  const { data } = useCategoriesQuery();
  console.log(data);
  //const products = data?.listBeefFeed || [];

  return (
    <DataContext.Provider
      value={{
        products: [],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
