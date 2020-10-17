import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
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

export type BeefFeedDto = {
  __typename?: "BeefFeedDTO";
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  price: Scalars["BigDecimal"];
  images?: Maybe<Array<Maybe<FeedImageDto>>>;
};

export type BeefFeedInputDto = {
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  price: Scalars["BigDecimal"];
};

export type DeletePayload = {
  __typename?: "DeletePayload";
  status: Scalars["Int"];
};

export type FeedImageDto = {
  __typename?: "FeedImageDTO";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["String"]>;
  feedId?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** beefFeed */
  saveNewBeefFeed?: Maybe<BeefFeedDto>;
  updateBeefFeed?: Maybe<BeefFeedDto>;
  deleteBeefFeed: DeletePayload;
  /** readyMadeFeed */
  saveNewReadyMadeFeed?: Maybe<ReadyMadeFeedDto>;
  updateReadyMadeFeed?: Maybe<ReadyMadeFeedDto>;
  deleteReadyMadeFeed: DeletePayload;
  /** feedImage */
  updateFeedImageById?: Maybe<FeedImageDto>;
};

export type MutationSaveNewBeefFeedArgs = {
  beefFeedInputDTO: BeefFeedInputDto;
};

export type MutationUpdateBeefFeedArgs = {
  beefFeedId: Scalars["String"];
  beefFeedInputDTO: BeefFeedInputDto;
};

export type MutationDeleteBeefFeedArgs = {
  beefFeedId: Scalars["String"];
};

export type MutationSaveNewReadyMadeFeedArgs = {
  readyMadeFeedInputDTO: ReadyMadeFeedInputDto;
};

export type MutationUpdateReadyMadeFeedArgs = {
  readyMadeFeedId: Scalars["String"];
  readyMadeFeedInputDTO: ReadyMadeFeedInputDto;
};

export type MutationDeleteReadyMadeFeedArgs = {
  readyMadeFeedId: Scalars["String"];
};

export type MutationUpdateFeedImageByIdArgs = {
  avatar?: Maybe<Array<Scalars["Upload"]>>;
};

export type Query = {
  __typename?: "Query";
  /** beefFeed */
  listBeefFeed?: Maybe<Array<Maybe<BeefFeedDto>>>;
  beefFeedById?: Maybe<BeefFeedDto>;
  /** readyMadeFeed */
  listReadyMadeFeed?: Maybe<Array<Maybe<ReadyMadeFeedDto>>>;
  readyMadeFeedById?: Maybe<ReadyMadeFeedDto>;
};

export type QueryBeefFeedByIdArgs = {
  beefFeedId?: Maybe<Scalars["String"]>;
};

export type QueryReadyMadeFeedByIdArgs = {
  readyMadeFeedId?: Maybe<Scalars["String"]>;
};

/**
 * input BeefFeedInputDTO {
 *     id: String
 *     name: String!
 *     price: BigDecimal!
 * }
 */
export type ReadyMadeFeedDto = {
  __typename?: "ReadyMadeFeedDTO";
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  price: Scalars["BigDecimal"];
  composition?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<FeedImageDto>>>;
};

export type ReadyMadeFeedInputDto = {
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  price: Scalars["BigDecimal"];
  composition?: Maybe<Scalars["String"]>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = { __typename?: "Query" } & {
  listBeefFeed?: Maybe<
    Array<
      Maybe<
        { __typename?: "BeefFeedDTO" } & Pick<
          BeefFeedDto,
          "id" | "name" | "price"
        > & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: "FeedImageDTO" } & Pick<
                    FeedImageDto,
                    "id" | "name" | "main" | "image" | "feedId"
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export const ProductsDocument = gql`
  query Products {
    listBeefFeed {
      id
      name
      price
      images {
        id
        name
        main
        image
        feedId
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
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
