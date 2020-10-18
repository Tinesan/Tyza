import gql from "graphql-tag";

export const Categories = gql`
  query Categories {
    listCategory {
      id
      name
    }
  }
`;

export const AddNewCategory = gql`
  mutation addNewCategory($name: String!) {
    saveNewCategory(categoryInputDTO: { name: $name }) {
      id
    }
  }
`;
