import { TBasketItem } from "components/Basket/helpers";
import { ProductItemFragment } from "generated/graphql";
import { BasketValue } from "providers/BasketProvider";
import TestImage from "images/icons/logo.svg";

export const getBasketListData = (
  basketValues: BasketValue,
  products: ProductItemFragment[]
): TBasketItem[] => {
  const basketValuesKeys = Object.keys(basketValues);
  if (!basketValuesKeys.length) return [];
  const basketListData: TBasketItem[] = [];
  basketValuesKeys.forEach((key) => {
    const product = products.find(({ id }) => id === key);
    if (product) {
      const { id, name, price, images } = product;
      const image = images[0]?.uri;
      const count = basketValues[key];
      const basketItem: TBasketItem = {
        id,
        name,
        count,
        price,
        img: image || TestImage,
      };
      basketListData.push(basketItem);
    }
  });
  return basketListData;
};
