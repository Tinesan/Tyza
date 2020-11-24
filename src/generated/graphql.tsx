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


export type CallRequestInput = {
  name: Scalars['String'];
  phone: Scalars['String'];
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

export type CredentialsInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CustomerDto = {
  __typename?: 'CustomerDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  street: Scalars['String'];
  house: Scalars['String'];
  building: Scalars['String'];
  frontDoor: Scalars['String'];
  floor: Scalars['String'];
  flat: Scalars['String'];
};

export type CustomerInputDto = {
  name: Scalars['String'];
  phone: Scalars['String'];
  street: Scalars['String'];
  house: Scalars['String'];
  building: Scalars['String'];
  frontDoor: Scalars['String'];
  floor: Scalars['String'];
  flat: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * catdog-service
   *     product
   */
  saveNewProduct?: Maybe<ProductDto>;
  updateProduct?: Maybe<ProductDto>;
  deleteProduct: Payload;
  /** productImage */
  updateMainImageById?: Maybe<ProductDto>;
  addNewImages?: Maybe<ProductDto>;
  /** category */
  saveNewCategory: CategoryDto;
  updateCategory: CategoryDto;
  deleteCategory: Payload;
  /**
   * catdog-order-service
   *    product-order
   */
  placeOrder: ProductOrderDto;
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


export type MutationPlaceOrderArgs = {
  productOrderInputDTO: ProductOrderInputDto;
};

export type OAuth2AccessTokenDto = {
  __typename?: 'OAuth2AccessTokenDTO';
  accessToken: Scalars['String'];
  tokenType: Scalars['String'];
  refreshToken: Scalars['String'];
  expiresIn: Scalars['Int'];
  scope: Array<Scalars['String']>;
  authenticationName: Scalars['String'];
  authorities: Array<Scalars['String']>;
  jti: Scalars['String'];
};

export type PageProductOrderDto = {
  __typename?: 'PageProductOrderDTO';
  content: Array<ProductOrderDto>;
  pageable: PageableDto;
  totalPages: Scalars['Int'];
  last: Scalars['Boolean'];
  totalElements: Scalars['Int'];
  first: Scalars['Boolean'];
  number: Scalars['Int'];
  sort: SortDto;
  numberOfElements: Scalars['Int'];
  size: Scalars['Int'];
  empty: Scalars['Boolean'];
};

export type PageableDto = {
  __typename?: 'PageableDTO';
  sort: SortDto;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  offset: Scalars['Int'];
  paged: Scalars['Boolean'];
  unpaged: Scalars['Boolean'];
};

export type Payload = {
  __typename?: 'Payload';
  status: Scalars['Int'];
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
  position: Scalars['Int'];
};

export type ProductImageDto = {
  __typename?: 'ProductImageDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  main: Scalars['Boolean'];
  uri: Scalars['String'];
  productId: Scalars['String'];
  type: Scalars['String'];
};

export type ProductInputDto = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description: Scalars['String'];
  stock: Scalars['Boolean'];
  categoryId: Scalars['String'];
  costPer: Scalars['String'];
  position: Scalars['Int'];
};

export type ProductOrderDto = {
  __typename?: 'ProductOrderDTO';
  id: Scalars['String'];
  customer: CustomerDto;
  productOrderLines: Array<ProductOrderLineDto>;
  orderStatus: Scalars['String'];
  deliveryTime: Scalars['String'];
  createdDate: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type ProductOrderInputDto = {
  customer: CustomerInputDto;
  productOrderLines: Array<ProductOrderLineInputDto>;
  deliveryTime: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type ProductOrderLineDto = {
  __typename?: 'ProductOrderLineDTO';
  id: Scalars['String'];
  productId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description: Scalars['String'];
  costPer: Scalars['String'];
  orderQuantity: Scalars['Int'];
};

export type ProductOrderLineInputDto = {
  productId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  description: Scalars['String'];
  costPer: Scalars['String'];
  orderQuantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /**
   * catdog-service
   *     product
   */
  listProduct: Array<ProductDto>;
  productById?: Maybe<ProductDto>;
  /** category */
  listCategory: Array<CategoryDto>;
  categoryById: CategoryDto;
  /** catdog-order-service */
  findAllOrders: PageProductOrderDto;
  /** authentication-service */
  authenticate: OAuth2AccessTokenDto;
  refreshToken: OAuth2AccessTokenDto;
  /** telegram */
  callRequest: Payload;
};


export type QueryProductByIdArgs = {
  productId?: Maybe<Scalars['String']>;
};


export type QueryCategoryByIdArgs = {
  categoryId: Scalars['String'];
};


export type QueryFindAllOrdersArgs = {
  page?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryAuthenticateArgs = {
  credentialsInput: CredentialsInput;
};


export type QueryRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type QueryCallRequestArgs = {
  callRequestInput?: Maybe<CallRequestInput>;
};

export type SortDto = {
  __typename?: 'SortDTO';
  sorted: Scalars['Boolean'];
  unsorted: Scalars['Boolean'];
  empty: Scalars['Boolean'];
};


export type AuthenticateDataFragment = (
  { __typename?: 'OAuth2AccessTokenDTO' }
  & Pick<OAuth2AccessTokenDto, 'tokenType' | 'accessToken' | 'authorities' | 'authenticationName'>
);

export type AuthenticateQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateQuery = (
  { __typename?: 'Query' }
  & { authenticate: (
    { __typename?: 'OAuth2AccessTokenDTO' }
    & AuthenticateDataFragment
  ) }
);

export type CallRequestQueryVariables = Exact<{
  name: Scalars['String'];
  phone: Scalars['String'];
}>;


export type CallRequestQuery = (
  { __typename?: 'Query' }
  & { callRequest: (
    { __typename?: 'Payload' }
    & Pick<Payload, 'status'>
  ) }
);

export type CategoryItemFragment = (
  { __typename?: 'CategoryDTO' }
  & Pick<CategoryDto, 'id' | 'name' | 'description'>
);

export type CategoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { categoryById: (
    { __typename?: 'CategoryDTO' }
    & CategoryItemFragment
  ) }
);

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
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
  description: Scalars['String'];
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
    { __typename?: 'Payload' }
    & Pick<Payload, 'status'>
  ) }
);

export type CategoriesAndProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesAndProductsQuery = (
  { __typename?: 'Query' }
  & { listCategory: Array<(
    { __typename?: 'CategoryDTO' }
    & CategoryItemFragment
  )>, listProduct: Array<(
    { __typename?: 'ProductDTO' }
    & ProductItemFragment
  )> }
);

export type PlaceOrderMutationVariables = Exact<{
  comment: Scalars['String'];
  deliveryTime: Scalars['String'];
  customer: CustomerInputDto;
  productOrderLines: Array<ProductOrderLineInputDto>;
}>;


export type PlaceOrderMutation = (
  { __typename?: 'Mutation' }
  & { placeOrder: (
    { __typename?: 'ProductOrderDTO' }
    & Pick<ProductOrderDto, 'id'>
  ) }
);

export type OrderContentItemFragment = (
  { __typename?: 'ProductOrderDTO' }
  & Pick<ProductOrderDto, 'id' | 'deliveryTime' | 'createdDate'>
  & { customer: (
    { __typename?: 'CustomerDTO' }
    & Pick<CustomerDto, 'id' | 'name' | 'phone' | 'street' | 'house' | 'building' | 'frontDoor' | 'floor' | 'flat'>
  ), productOrderLines: Array<(
    { __typename?: 'ProductOrderLineDTO' }
    & Pick<ProductOrderLineDto, 'id' | 'productId' | 'name' | 'price' | 'description' | 'costPer' | 'orderQuantity'>
  )> }
);

export type FindAllOrdersQueryVariables = Exact<{
  page?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}>;


export type FindAllOrdersQuery = (
  { __typename?: 'Query' }
  & { findAllOrders: (
    { __typename?: 'PageProductOrderDTO' }
    & Pick<PageProductOrderDto, 'last' | 'first' | 'number' | 'totalPages' | 'totalElements'>
    & { content: Array<(
      { __typename?: 'ProductOrderDTO' }
      & OrderContentItemFragment
    )> }
  ) }
);

export type ProductItemFragment = (
  { __typename?: 'ProductDTO' }
  & Pick<ProductDto, 'id' | 'name' | 'stock' | 'price' | 'costPer' | 'position' | 'categoryId' | 'description'>
  & { images: Array<(
    { __typename?: 'ProductImageDTO' }
    & Pick<ProductImageDto, 'id' | 'uri' | 'name' | 'main' | 'productId'>
  )> }
);

export type AddNewProductMutationVariables = Exact<{
  name: Scalars['String'];
  position: Scalars['Int'];
  stock: Scalars['Boolean'];
  costPer: Scalars['String'];
  price: Scalars['BigDecimal'];
  categoryId: Scalars['String'];
  description: Scalars['String'];
}>;


export type AddNewProductMutation = (
  { __typename?: 'Mutation' }
  & { saveNewProduct?: Maybe<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['Int'];
  stock: Scalars['Boolean'];
  costPer: Scalars['String'];
  price: Scalars['BigDecimal'];
  categoryId: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'ProductDTO' }
    & Pick<ProductDto, 'id'>
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
    & { images: Array<(
      { __typename?: 'ProductImageDTO' }
      & Pick<ProductImageDto, 'id'>
    )> }
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { productById?: Maybe<(
    { __typename?: 'ProductDTO' }
    & ProductItemFragment
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct: (
    { __typename?: 'Payload' }
    & Pick<Payload, 'status'>
  ) }
);

export const AuthenticateDataFragmentDoc = gql`
    fragment AuthenticateData on OAuth2AccessTokenDTO {
  tokenType
  accessToken
  authorities
  authenticationName
}
    `;
export const CategoryItemFragmentDoc = gql`
    fragment CategoryItem on CategoryDTO {
  id
  name
  description
}
    `;
export const OrderContentItemFragmentDoc = gql`
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
export const ProductItemFragmentDoc = gql`
    fragment ProductItem on ProductDTO {
  id
  name
  stock
  price
  costPer
  position
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
export const AuthenticateDocument = gql`
    query authenticate($username: String!, $password: String!) {
  authenticate(credentialsInput: {username: $username, password: $password}) {
    ...AuthenticateData
  }
}
    ${AuthenticateDataFragmentDoc}`;

/**
 * __useAuthenticateQuery__
 *
 * To run a query within a React component, call `useAuthenticateQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthenticateQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateQuery(baseOptions?: Apollo.QueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
        return Apollo.useQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, baseOptions);
      }
export function useAuthenticateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
          return Apollo.useLazyQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, baseOptions);
        }
export type AuthenticateQueryHookResult = ReturnType<typeof useAuthenticateQuery>;
export type AuthenticateLazyQueryHookResult = ReturnType<typeof useAuthenticateLazyQuery>;
export type AuthenticateQueryResult = Apollo.QueryResult<AuthenticateQuery, AuthenticateQueryVariables>;
export const CallRequestDocument = gql`
    query callRequest($name: String!, $phone: String!) {
  callRequest(callRequestInput: {name: $name, phone: $phone}) {
    status
  }
}
    `;

/**
 * __useCallRequestQuery__
 *
 * To run a query within a React component, call `useCallRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useCallRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCallRequestQuery({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCallRequestQuery(baseOptions?: Apollo.QueryHookOptions<CallRequestQuery, CallRequestQueryVariables>) {
        return Apollo.useQuery<CallRequestQuery, CallRequestQueryVariables>(CallRequestDocument, baseOptions);
      }
export function useCallRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CallRequestQuery, CallRequestQueryVariables>) {
          return Apollo.useLazyQuery<CallRequestQuery, CallRequestQueryVariables>(CallRequestDocument, baseOptions);
        }
export type CallRequestQueryHookResult = ReturnType<typeof useCallRequestQuery>;
export type CallRequestLazyQueryHookResult = ReturnType<typeof useCallRequestLazyQuery>;
export type CallRequestQueryResult = Apollo.QueryResult<CallRequestQuery, CallRequestQueryVariables>;
export const CategoryDocument = gql`
    query Category($id: String!) {
  categoryById(categoryId: $id) {
    ...CategoryItem
  }
}
    ${CategoryItemFragmentDoc}`;

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
    mutation UpdateCategory($id: String!, $name: String!, $description: String!) {
  updateCategory(categoryId: $id, categoryInputDTO: {name: $name, description: $description}) {
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
 *      description: // value for 'description'
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
    mutation AddNewCategory($name: String!, $description: String!) {
  saveNewCategory(categoryInputDTO: {name: $name, description: $description}) {
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
 *      description: // value for 'description'
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
    ...CategoryItem
  }
  listProduct {
    ...ProductItem
  }
}
    ${CategoryItemFragmentDoc}
${ProductItemFragmentDoc}`;

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
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($comment: String!, $deliveryTime: String!, $customer: CustomerInputDTO!, $productOrderLines: [ProductOrderLineInputDTO!]!) {
  placeOrder(productOrderInputDTO: {comment: $comment, customer: $customer, productOrderLines: $productOrderLines, deliveryTime: $deliveryTime}) {
    id
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      deliveryTime: // value for 'deliveryTime'
 *      customer: // value for 'customer'
 *      productOrderLines: // value for 'productOrderLines'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, baseOptions);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const FindAllOrdersDocument = gql`
    query FindAllOrders($page: String, $size: String, $sort: String) {
  findAllOrders(page: $page, size: $size, sort: $sort) {
    content {
      ...OrderContentItem
    }
    last
    first
    number
    totalPages
    totalElements
  }
}
    ${OrderContentItemFragmentDoc}`;

/**
 * __useFindAllOrdersQuery__
 *
 * To run a query within a React component, call `useFindAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllOrdersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFindAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllOrdersQuery, FindAllOrdersQueryVariables>) {
        return Apollo.useQuery<FindAllOrdersQuery, FindAllOrdersQueryVariables>(FindAllOrdersDocument, baseOptions);
      }
export function useFindAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllOrdersQuery, FindAllOrdersQueryVariables>) {
          return Apollo.useLazyQuery<FindAllOrdersQuery, FindAllOrdersQueryVariables>(FindAllOrdersDocument, baseOptions);
        }
export type FindAllOrdersQueryHookResult = ReturnType<typeof useFindAllOrdersQuery>;
export type FindAllOrdersLazyQueryHookResult = ReturnType<typeof useFindAllOrdersLazyQuery>;
export type FindAllOrdersQueryResult = Apollo.QueryResult<FindAllOrdersQuery, FindAllOrdersQueryVariables>;
export const AddNewProductDocument = gql`
    mutation AddNewProduct($name: String!, $position: Int!, $stock: Boolean!, $costPer: String!, $price: BigDecimal!, $categoryId: String!, $description: String!) {
  saveNewProduct(productInputDTO: {name: $name, price: $price, stock: $stock, costPer: $costPer, position: $position, categoryId: $categoryId, description: $description}) {
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
 *      position: // value for 'position'
 *      stock: // value for 'stock'
 *      costPer: // value for 'costPer'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddNewProductMutation(baseOptions?: Apollo.MutationHookOptions<AddNewProductMutation, AddNewProductMutationVariables>) {
        return Apollo.useMutation<AddNewProductMutation, AddNewProductMutationVariables>(AddNewProductDocument, baseOptions);
      }
export type AddNewProductMutationHookResult = ReturnType<typeof useAddNewProductMutation>;
export type AddNewProductMutationResult = Apollo.MutationResult<AddNewProductMutation>;
export type AddNewProductMutationOptions = Apollo.BaseMutationOptions<AddNewProductMutation, AddNewProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: String!, $name: String!, $position: Int!, $stock: Boolean!, $costPer: String!, $price: BigDecimal!, $categoryId: String!, $description: String!) {
  updateProduct(productId: $id, productInputDTO: {name: $name, stock: $stock, price: $price, costPer: $costPer, position: $position, categoryId: $categoryId, description: $description}) {
    id
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      position: // value for 'position'
 *      stock: // value for 'stock'
 *      costPer: // value for 'costPer'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const AddNewImagesDocument = gql`
    mutation AddNewImages($images: [Upload!]!, $productId: String!) {
  addNewImages(images: $images, productId: $productId) {
    id
    images {
      id
    }
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
export const ProductDocument = gql`
    query Product($id: String!) {
  productById(productId: $id) {
    ...ProductItem
  }
}
    ${ProductItemFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: String!) {
  deleteProduct(productId: $id) {
    status
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;