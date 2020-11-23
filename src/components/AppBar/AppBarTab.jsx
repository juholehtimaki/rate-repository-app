import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.headerBackgroundColor,
    height: 100,
  },
  text: {
    color: theme.colors.textHeader,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

export const AppBar = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.text} {...props} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
