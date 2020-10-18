import gql from "graphql-tag";

export const Categories = gql`
  query Categories {
    listCategory {
      id
      name
    }
  }
`;

export const Category = gql`
  query Category($id: String!) {
    categoryById(categoryId: $id) {
      id
      name
    }
  }
`;

export const UpdateCategoty = gql`
  mutation UpdateCategory($id: String!, $name: String!) {
    updateCategory(categoryId: $id, categoryInputDTO: { name: $name }) {
      id
    }
  }
`;

export const AddNewCategory = gql`
  mutation AddNewCategory($name: String!) {
    saveNewCategory(categoryInputDTO: { name: $name }) {
      id
    }
  }
`;
