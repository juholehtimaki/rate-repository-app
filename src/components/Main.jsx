import React from "react";
import { Route, Switch, Redirect } from "react-router-native";

import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import DetailedRepository from "./DetailedRepository";
import CreateReview from "./CreateReview";

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
          <SignIn />
        </Route>
        <Route path="/repository/:id">
          <DetailedRepository />
        </Route>
        <Route path="/review">
          <CreateReview />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
