import gql from "graphql-tag";

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

export const FindAllOrders = gql`
  query FindAllOrders($page: String, $size: String, $sort: String) {
    findAllOrders(page: $page, size: $size, sort: $sort) {
      content {
        id
        deliveryTime
      }
      totalElements
    }
  }
`;
