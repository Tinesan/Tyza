import { BasketItem } from "components/Basket/helpers";
import { ProductItemFragment } from "generated/graphql";
import { BasketValue } from "providers/BasketProvider";

export const getBasketListData = (
  basketValues: BasketValue,
  products: ProductItemFragment[]
): BasketItem[] => {
  const basketValuesKeys = Object.keys(basketValues);
  if (!basketValuesKeys.length) return [];
  const basketListData: BasketItem[] = [];
  basketValuesKeys.forEach((key) => {
    const product = products.find(({ id }) => id === key);
    if (product) {
      const { id, name, price, images } = product;
      const count = basketValues[key];
      const basketItem: BasketItem = {
        id,
        name,
        count,
        price,
        img: images[0].image || "",
      };
      basketListData.push(basketItem);
    }
  });
  return basketListData;
};
