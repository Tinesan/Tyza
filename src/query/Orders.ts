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
