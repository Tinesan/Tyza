import gql from "graphql-tag";

export const AddNewProduct = gql`
  mutation AddNewProduct(
    $name: String!
    $description: String!
    $stock: Boolean!
    $categoryId: String!
    $costPer: String!
    $price: BigDecimal!
  ) {
    saveNewProduct(
      productInputDTO: {
        name: $name
        description: $description
        stock: $stock
        categoryId: $categoryId
        costPer: $costPer
        price: $price
      }
    ) {
      id
    }
  }
`;

export const Products = gql`
  query Products {
    listProduct {
      id
      name
      price
      description
      stock
      categoryId
      costPer
      images {
        id
      }
    }
  }
`;

export const AddNewImages = gql`
  mutation AddNewImages($images: [Upload!]!, $productId: String!) {
    addNewImages(images: $images, productId: $productId) {
      id
    }
  }
`;
