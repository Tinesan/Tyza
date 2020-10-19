import gql from "graphql-tag";

export const CategoriesAndProducts = gql`
  query CategoriesAndProducts {
    listCategory {
      id
      name
    }
    listProduct {
      id
      name
    }
  }
`;
