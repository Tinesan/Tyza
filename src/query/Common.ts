import gql from "graphql-tag";

import { CategoryItemFragmentDoc, ProductItemFragmentDoc } from "generated/graphql";

export const CategoriesAndProducts = gql`
  query CategoriesAndProducts {
    listCategory {
      ...CategoryItem
    }
    listProduct {
      ...ProductItem
    }
  }
  ${ProductItemFragmentDoc}
  ${CategoryItemFragmentDoc}
`;
