import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in java.math.BigDecimal */
  BigDecimal: any;
  Upload: any;
};


export type CategoryDto = {
  __typename?: 'CategoryDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CategoryInputDto = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type DeletePayload = {
  __typename?: 'DeletePayload';
  status: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** product */
  saveNewProduct?: Maybe<ProductDto>;
  updateProduct?: Maybe<ProductDto>;
  deleteProduct: DeletePayload;
  /** productImage */
  updateProductImageById?: Maybe<ProductImageDto>;
  /** category */
  saveNewCategory: CategoryDto;
  updateCategory: CategoryDto;
  deleteCategory: DeletePayload;
};


export type MutationSaveNewProductArgs = {
  productInputDTO: ProductInputDto;
};


export type MutationUpdateProductArgs = {
  productId: Scalars['String'];
  productInputDTO: ProductInputDto;
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type MutationUpdateProductImageByIdArgs = {
  avatar?: Maybe<Array<Scalars['Upload']>>;
};


export type MutationSaveNewCategoryArgs = {
  categoryInputDTO: CategoryInputDto;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['String'];
  categoryInputDTO: CategoryInputDto;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['String'];
};

export type ProductDto = {
  __typename?: 'ProductDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description?: Maybe<Scalars['String']>;
  stock: Scalars['Boolean'];
  categoryId: Scalars['String'];
  images: Array<ProductImageDto>;
};

export type ProductImageDto = {
  __typename?: 'ProductImageDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  main: Scalars['Boolean'];
  image?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
};

export type ProductInputDto = {
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description?: Maybe<Scalars['String']>;
  stock: Scalars['Boolean'];
  categoryId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** product */
  listProduct: Array<ProductDto>;
  productById?: Maybe<ProductDto>;
  /** category */
  listCategory: Array<CategoryDto>;
  categoryById: CategoryDto;
};


export type QueryProductByIdArgs = {
  productId?: Maybe<Scalars['String']>;
};


export type QueryCategoryByIdArgs = {
  categoryId: Scalars['String'];
};


export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { listCategory: Array<(
    { __typename?: 'CategoryDTO' }
    & Pick<CategoryDto, 'id' | 'name'>
  )> }
);

export type AddNewCategoryMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddNewCategoryMutation = (
  { __typename?: 'Mutation' }
  & { saveNewCategory: (
    { __typename?: 'CategoryDTO' }
    & Pick<CategoryDto, 'id'>
  ) }
);


export const CategoriesDocument = gql`
    query Categories {
  listCategory {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const AddNewCategoryDocument = gql`
    mutation addNewCategory($name: String!) {
  saveNewCategory(categoryInputDTO: {name: $name}) {
    id
  }
}
    `;
export type AddNewCategoryMutationFn = Apollo.MutationFunction<AddNewCategoryMutation, AddNewCategoryMutationVariables>;

/**
 * __useAddNewCategoryMutation__
 *
 * To run a mutation, you first call `useAddNewCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewCategoryMutation, { data, loading, error }] = useAddNewCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddNewCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddNewCategoryMutation, AddNewCategoryMutationVariables>) {
        return Apollo.useMutation<AddNewCategoryMutation, AddNewCategoryMutationVariables>(AddNewCategoryDocument, baseOptions);
      }
export type AddNewCategoryMutationHookResult = ReturnType<typeof useAddNewCategoryMutation>;
export type AddNewCategoryMutationResult = Apollo.MutationResult<AddNewCategoryMutation>;
export type AddNewCategoryMutationOptions = Apollo.BaseMutationOptions<AddNewCategoryMutation, AddNewCategoryMutationVariables>;