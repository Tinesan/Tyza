import gql from "graphql-tag";

import { CategoryItemFragmentDoc } from "generated/graphql";

gql`
  fragment CategoryItem on CategoryDTO {
    id
    name
    description
  }
`;

export const Category = gql`
  query Category($id: String!) {
    categoryById(categoryId: $id) {
      ...CategoryItem
    }
  }
  ${CategoryItemFragmentDoc}
`;

export const UpdateCategoty = gql`
  mutation UpdateCategory($id: String!, $name: String!, $description: String!) {
    updateCategory(
      categoryId: $id
      categoryInputDTO: { name: $name, description: $description }
    ) {
      id
    }
  }
`;

export const AddNewCategory = gql`
  mutation AddNewCategory($name: String!, $description: String!) {
    saveNewCategory(
      categoryInputDTO: { name: $name, description: $description }
    ) {
      id
    }
  }
`;

export const DeleteCategory = gql`
  mutation DeleteCategory($id: String!) {
    deleteCategory(categoryId: $id) {
      status
    }
  }
`;
