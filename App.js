import React from "react";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <NativeRouter>
      <AuthStorageContext.Provider value={authStorage}>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </AuthStorageContext.Provider>
    </NativeRouter>
  );
};

export default App;
