import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Link, useHistory } from "react-router-native";
import Constants from "expo-constants";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

import { theme } from "../../theme";
import AppBarTab from "./AppBarTab";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import AuthStorageContext from "../../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.headerBackgroundColor,
    height: 100,
    display: "flex",
    padding: 30,
  },
  tabContainer: {
    padding: 10,
  },
});

const AppBar = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const onSignout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.tabContainer}>
          <Link to="/" component={AppBarTab}>
            Repository
          </Link>
        </View>
        {data && data.authorizedUser ? (
          <>
            <View style={styles.tabContainer}>
              <Link to="/review" component={AppBarTab}>
                Creata a review
              </Link>
            </View>
            <View style={styles.tabContainer}>
              <AppBarTab onPress={onSignout}>Sign out</AppBarTab>
            </View>
          </>
        ) : (
          <>
            <View style={styles.tabContainer}>
              <Link to="/signin" component={AppBarTab}>
                Sign in
              </Link>
            </View>
            <View style={styles.tabContainer}>
              <Link to="/signup" component={AppBarTab}>
                Sign up
              </Link>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
