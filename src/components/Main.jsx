import React from "react";
import { Route, Switch, Redirect } from "react-router-native";

import { StyleSheet, View } from "react-native";
import { RepositoryList } from "./RepositoryList";
import Signin from "./Signin";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
