import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { AUTHORIZE_USER } from "../graphql/mutations";
import { useHistory } from "react-router-native";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE_USER);
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signIn = async (credentials) => {
    const data = await mutate({
      variables: credentials,
    });
    const accessToken = data.data.authorize.accessToken;
    if (accessToken) {
      await authStorage.setAccessToken(accessToken);
      apolloClient.resetStore();
      history.push("/");
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
