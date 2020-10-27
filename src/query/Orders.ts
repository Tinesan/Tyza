import gql from "graphql-tag";

import { OrderContentItemFragmentDoc } from "generated/graphql";

export const PlaceOrder = gql`
  mutation PlaceOrder(
    $deliveryTime: String!
    $customer: CustomerInputDTO!
    $productOrderLines: [ProductOrderLineInputDTO!]!
  ) {
    placeOrder(
      productOrderInputDTO: {
        customer: $customer
        productOrderLines: $productOrderLines
        deliveryTime: $deliveryTime
      }
    ) {
      id
    }
  }
`;

gql`
  fragment OrderContentItem on ProductOrderDTO {
    id
    deliveryTime
    deliveryTime
    createdDate
    customer {
      id
      name
      phone
      street
      house
      building
      frontDoor
      floor
      flat
    }
    productOrderLines {
      id
      productId
      name
      price
      description
      costPer
      orderQuantity
    }
  }
`;

export const FindAllOrders = gql`
  query FindAllOrders($page: String, $size: String, $sort: String) {
    findAllOrders(page: $page, size: $size, sort: $sort) {
      content {
        ...OrderContentItem
      }
      totalElements
    }
  }
  ${OrderContentItemFragmentDoc}
`;
