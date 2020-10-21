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
  updateMainImageById?: Maybe<ProductDto>;
  addNewImages?: Maybe<ProductDto>;
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


export type MutationUpdateMainImageByIdArgs = {
  imageId: Scalars['String'];
  main: Scalars['Boolean'];
};


export type MutationAddNewImagesArgs = {
  images: Array<Scalars['Upload']>;
  productId: Scalars['String'];
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
  costPer: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description: Scalars['String'];
  stock: Scalars['Boolean'];
  categoryId: Scalars['String'];
  costPer: Scalars['String'];
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

export type CategoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { categoryById: (
    { __typename?: 'CategoryDTO' }
    & Pick<CategoryDto, 'id' | 'name'>
  ) }
);

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory: (
    { __typename?: 'CategoryDTO' }
    & Pick<CategoryDto, 'id'>
  ) }
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

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteCategory: (
    { __typename?: 'DeletePayload' }
    & Pick<DeletePayload, 'status'>
  ) }
);

export type CategoriesAndProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesAndProductsQuery = (
  { __typename?: 'Query' }
  & { listCategory: Array<(
    { __typename?: 'CategoryDTO' }
    & Pick<CategoryDto, 'id' | 'name'>
  )>, listProduct: Array<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id' | 'name'>
  )> }
);

export type AddNewProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  stock: Scalars['Boolean'];
  categoryId: Scalars['String'];
  costPer: Scalars['String'];
  price: Scalars['BigDecimal'];
}>;


export type AddNewProductMutation = (
  { __typename?: 'Mutation' }
  & { saveNewProduct?: Maybe<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id'>
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { listProduct: Array<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id' | 'name' | 'price' | 'description' | 'stock' | 'categoryId' | 'costPer'>
    & { images: Array<(
      { __typename?: 'ProductImageDTO' }
      & Pick<ProductImageDto, 'id'>
    )> }
  )> }
);

export type AddNewImagesMutationVariables = Exact<{
  images: Array<Scalars['Upload']>;
  productId: Scalars['String'];
}>;


export type AddNewImagesMutation = (
  { __typename?: 'Mutation' }
  & { addNewImages?: Maybe<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id'>
  )> }
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
export const CategoryDocument = gql`
    query Category($id: String!) {
  categoryById(categoryId: $id) {
    id
    name
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, baseOptions);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, baseOptions);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: String!, $name: String!) {
  updateCategory(categoryId: $id, categoryInputDTO: {name: $name}) {
    id
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, baseOptions);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const AddNewCategoryDocument = gql`
    mutation AddNewCategory($name: String!) {
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
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: String!) {
  deleteCategory(categoryId: $id) {
    status
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, baseOptions);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CategoriesAndProductsDocument = gql`
    query CategoriesAndProducts {
  listCategory {
    id
    name
  }
  listProduct {
    id
    name
  }
}
    `;

/**
 * __useCategoriesAndProductsQuery__
 *
 * To run a query within a React component, call `useCategoriesAndProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesAndProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesAndProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesAndProductsQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesAndProductsQuery, CategoriesAndProductsQueryVariables>) {
        return Apollo.useQuery<CategoriesAndProductsQuery, CategoriesAndProductsQueryVariables>(CategoriesAndProductsDocument, baseOptions);
      }
export function useCategoriesAndProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesAndProductsQuery, CategoriesAndProductsQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesAndProductsQuery, CategoriesAndProductsQueryVariables>(CategoriesAndProductsDocument, baseOptions);
        }
export type CategoriesAndProductsQueryHookResult = ReturnType<typeof useCategoriesAndProductsQuery>;
export type CategoriesAndProductsLazyQueryHookResult = ReturnType<typeof useCategoriesAndProductsLazyQuery>;
export type CategoriesAndProductsQueryResult = Apollo.QueryResult<CategoriesAndProductsQuery, CategoriesAndProductsQueryVariables>;
export const AddNewProductDocument = gql`
    mutation AddNewProduct($name: String!, $description: String!, $stock: Boolean!, $categoryId: String!, $costPer: String!, $price: BigDecimal!) {
  saveNewProduct(productInputDTO: {name: $name, description: $description, stock: $stock, categoryId: $categoryId, costPer: $costPer, price: $price}) {
    id
  }
}
    `;
export type AddNewProductMutationFn = Apollo.MutationFunction<AddNewProductMutation, AddNewProductMutationVariables>;

/**
 * __useAddNewProductMutation__
 *
 * To run a mutation, you first call `useAddNewProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewProductMutation, { data, loading, error }] = useAddNewProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      stock: // value for 'stock'
 *      categoryId: // value for 'categoryId'
 *      costPer: // value for 'costPer'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddNewProductMutation(baseOptions?: Apollo.MutationHookOptions<AddNewProductMutation, AddNewProductMutationVariables>) {
        return Apollo.useMutation<AddNewProductMutation, AddNewProductMutationVariables>(AddNewProductDocument, baseOptions);
      }
export type AddNewProductMutationHookResult = ReturnType<typeof useAddNewProductMutation>;
export type AddNewProductMutationResult = Apollo.MutationResult<AddNewProductMutation>;
export type AddNewProductMutationOptions = Apollo.BaseMutationOptions<AddNewProductMutation, AddNewProductMutationVariables>;
export const ProductsDocument = gql`
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

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const AddNewImagesDocument = gql`
    mutation AddNewImages($images: [Upload!]!, $productId: String!) {
  addNewImages(images: $images, productId: $productId) {
    id
  }
}
    `;
export type AddNewImagesMutationFn = Apollo.MutationFunction<AddNewImagesMutation, AddNewImagesMutationVariables>;

/**
 * __useAddNewImagesMutation__
 *
 * To run a mutation, you first call `useAddNewImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewImagesMutation, { data, loading, error }] = useAddNewImagesMutation({
 *   variables: {
 *      images: // value for 'images'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useAddNewImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddNewImagesMutation, AddNewImagesMutationVariables>) {
        return Apollo.useMutation<AddNewImagesMutation, AddNewImagesMutationVariables>(AddNewImagesDocument, baseOptions);
      }
export type AddNewImagesMutationHookResult = ReturnType<typeof useAddNewImagesMutation>;
export type AddNewImagesMutationResult = Apollo.MutationResult<AddNewImagesMutation>;
export type AddNewImagesMutationOptions = Apollo.BaseMutationOptions<AddNewImagesMutation, AddNewImagesMutationVariables>;