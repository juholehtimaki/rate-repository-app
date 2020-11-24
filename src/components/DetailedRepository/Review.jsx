import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../theme";
import Text from "../utils/Text";

const styles = StyleSheet.create({
  flexContainer: {
    padding: 20,
    display: "flex",
    backgroundColor: theme.backgroundColor,
  },
  flexRowContainer: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
  flexColumnContainer: {
    flexDirection: "column",
    flexGrow: 1,
    padding: 10,
  },
  subflexColumnConter: {
    flexDirection: "column",
    flexGrow: 1,
    padding: 10,
    alignItems: "center",
  },
  ratingText: {
    color: theme.colors.buttonColor,
  },
  circle: {
    borderColor: theme.colors.buttonColor,
    borderWidth: 3,
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 12,
    flexWrap: "wrap",
    textAlign: "center",
  },
});

const Review = ({ item }) => {
  const formatedCreatedAt = new Date(item.createdAt).toLocaleDateString(
    "fi-FI"
  );

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRowContainer}>
        <View style={styles.circle}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.flexColumnContainer}>
          <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
            {item.user.username}
          </Text>
          <Text color="textSecondary">{formatedCreatedAt}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Review;
