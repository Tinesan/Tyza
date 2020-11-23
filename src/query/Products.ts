import gql from "graphql-tag";

import { ProductItemFragmentDoc } from "generated/graphql";

gql`
  fragment ProductItem on ProductDTO {
    id
    name
    stock
    price
    order
    costPer
    categoryId
    description
    images {
      id
      uri
      name
      main
      productId
    }
  }
`;

export const AddNewProduct = gql`
  mutation AddNewProduct(
    $order: Int!
    $name: String!
    $stock: Boolean!
    $costPer: String!
    $price: BigDecimal!
    $categoryId: String!
    $description: String!
  ) {
    saveNewProduct(
      productInputDTO: {
        name: $name
        order: $order
        price: $price
        stock: $stock
        costPer: $costPer
        categoryId: $categoryId
        description: $description
      }
    ) {
      id
    }
  }
`;

export const UpdateProduct = gql`
  mutation UpdateProduct(
    $id: String!
    $order: Int!
    $name: String!
    $stock: Boolean!
    $costPer: String!
    $price: BigDecimal!
    $categoryId: String!
    $description: String!
  ) {
    updateProduct(
      productId: $id
      productInputDTO: {
        name: $name
        order: $order
        stock: $stock
        price: $price
        costPer: $costPer
        categoryId: $categoryId
        description: $description
      }
    ) {
      id
    }
  }
`;

export const AddNewImages = gql`
  mutation AddNewImages($images: [Upload!]!, $productId: String!) {
    addNewImages(images: $images, productId: $productId) {
      id
      images {
        id
      }
    }
  }
`;

export const Product = gql`
  query Product($id: String!) {
    productById(productId: $id) {
      ...ProductItem
    }
  }
  ${ProductItemFragmentDoc}
`;

export const DeleteProduct = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(productId: $id) {
      status
    }
  }
`;
