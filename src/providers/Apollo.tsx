import { ApolloClient, ApolloProvider, from, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import React, { ReactNode, useContext } from "react";

import { AuthContext } from "./AuthProvider";

type Props = {
  children: ReactNode;
};
const { hostname } = window.location;

const uploadLink = createUploadLink({
  uri: `http://${hostname}:5003/graphql/`,
  fetchOptions: {
    mode: "cors",
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const useAppApolloClient = () => {
  const { authData } = useContext(AuthContext);
  const authLink = setContext((_, { headers }) => {
    const token = authData?.accessToken;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  return new ApolloClient({
    link: from([errorLink, authLink, uploadLink]),
    cache: new InMemoryCache(),
  });
};

const Apollo = ({ children }: Props) => {
  const client = useAppApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
