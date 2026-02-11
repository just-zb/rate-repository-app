import { gql, useMutation, useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });
    const accessToken = data.authenticate.accessToken;
    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
