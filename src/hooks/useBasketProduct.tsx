import { ProductItemFragment } from "generated/graphql";
import { BasketContext } from "providers/BasketProvider";
import { DataContext } from "providers/DataProvider";
import { useContext, useMemo } from "react";

export type BasketProduct = ProductItemFragment & { orderQuantity: number };

const useBasketProduct = () => {
  const { basketValues } = useContext(BasketContext);
  const { products } = useContext(DataContext);

  const basketProducts: BasketProduct[] = useMemo(() => {
    const basketValuesKeys = Object.keys(basketValues);
    if (!basketValuesKeys.length) return [];
    const basketListData: BasketProduct[] = [];
    basketValuesKeys.forEach((key) => {
      const product = products.find(({ id }) => id === key);
      if (product) {
        const basketItem: BasketProduct = {
          ...product,
          orderQuantity: basketValues[key],
        };
        basketListData.push(basketItem);
      }
    });
    return basketListData;
  }, [basketValues, products]);

  return { basketProducts };
};

export default useBasketProduct;
