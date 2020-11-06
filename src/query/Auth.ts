import gql from "graphql-tag";

import { AuthenticateDataFragmentDoc } from "generated/graphql";

gql`
  fragment AuthenticateData on OAuth2AccessTokenDTO {
    tokenType
    accessToken
    authorities
    authenticationName
  }
`;

export const Authenticate = gql`
  query authenticate($username: String!, $password: String!) {
    authenticate(
      credentialsInput: { username: $username, password: $password }
    ) {
      ...AuthenticateData
    }
  }
  ${AuthenticateDataFragmentDoc}
`;
