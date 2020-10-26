import React, { ReactNode, useMemo } from "react";

import { CategoryItemFragment, ProductItemFragment, useCategoriesAndProductsQuery } from "generated/graphql";

type Props = {
  children: ReactNode;
};

type DataContext = {
  dataProviderLoading: boolean;
  products: ProductItemFragment[];
  categories: CategoryItemFragment[];
  refetchCategoriesAndProducts: () => any;
};

export const DataContext = React.createContext<DataContext>({
  products: [],
  categories: [],
  dataProviderLoading: false,
  refetchCategoriesAndProducts: () => {},
});

const DataProvider = ({ children }: Props) => {
  const { data, refetch, loading } = useCategoriesAndProductsQuery();
  const { products, categories } = useMemo(() => {
    if (data?.listCategory && data.listProduct) {
      const { listCategory, listProduct } = data;
      return { products: listProduct, categories: listCategory };
    }
    return { products: [], categories: [] };
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        products,
        categories,
        dataProviderLoading: loading,
        refetchCategoriesAndProducts: refetch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
