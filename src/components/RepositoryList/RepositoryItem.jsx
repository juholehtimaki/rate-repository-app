import React from "react";
import { View, StyleSheet, Image } from "react-native";

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
  image: {
    width: 75,
    height: 75,
    borderRadius: theme.images.borderRadius,
  },
  languageContainer: {
    backgroundColor: "blue",
    alignSelf: "flex-start",
    padding: 3,
    borderRadius: 3,
  },
  languageText: {
    color: "white",
  },
});

const numberFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

export const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRowContainer}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.flexColumnContainer}>
          <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexRowContainer}>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary">
            {numberFormatter(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary">{numberFormatter(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary">{numberFormatter(item.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary">{numberFormatter(item.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};
