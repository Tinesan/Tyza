import gql from "graphql-tag";

export const Products = gql`
  query Products {
    listBeefFeed {
      id
      name
      price
      images {
        id
        name
        main
        image
        feedId
      }
    }
  }
`;
