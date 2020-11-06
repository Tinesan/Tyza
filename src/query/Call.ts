import gql from "graphql-tag";

export const Category = gql`
  query callRequest($name: String!, $phone: String!) {
    callRequest(callRequestInput: { name: $name, phone: $phone }) {
      status
    }
  }
`;
