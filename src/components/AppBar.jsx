import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import { theme } from "../theme";
import AppBarTab from "./AppBarTab";

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
  const tabs = [
    {
      tabName: "Repository",
      path: "/",
    },
    {
      tabName: "Sign in",
      path: "/signin",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {tabs.map((tab, index) => (
          <View key={index} style={styles.tabContainer}>
            <Link to={tab.path} component={AppBarTab}>
              {tab.tabName}
            </Link>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;
