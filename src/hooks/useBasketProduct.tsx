import { ProductItemFragment } from "generated/graphql";
import { BasketContext } from "providers/BasketProvider";
import { DataContext } from "providers/DataProvider";
import { useContext, useMemo } from "react";

export type BasketProduct = ProductItemFragment & { orderQuantity: number };

function shuffle(array: ProductItemFragment[]): ProductItemFragment[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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

  const suggestions: ProductItemFragment[] = useMemo(() => {
    return shuffle(
      products.filter(
        ({ id, stock }) => stock && !basketProducts.find((bP) => bP.id === id)
      )
    );
  }, [basketProducts, products]);

  return { basketProducts, suggestions };
};

export default useBasketProduct;
