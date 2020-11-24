import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { openURL } from "expo-linking";

import { theme } from "../../theme";
import Text from "../utils/Text";
import Button from "../utils/Button";

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
  button: {
    padding: 12,
    backgroundColor: theme.colors.buttonColor,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    textAlign: "center",
    color: theme.colors.textHeader,
  },
});

export const numberFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

export const RepositoryItem = ({ item, details }) => {
  const handleGitHub = () => {
    openURL(item.url);
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRowContainer}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.flexColumnContainer}>
          <Text
            color="textPrimary"
            fontSize="subheading"
            fontWeight="bold"
            testID="fullName"
          >
            {item.fullName}
          </Text>
          <Text color="textSecondary" testID="description">
            {item.description}
          </Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText} testID="language">
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.flexRowContainer}>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary" testID="stargazersCount">
            {numberFormatter(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary" testID="forksCount">
            {numberFormatter(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary" testID="reviewCount">
            {numberFormatter(item.reviewCount)}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.subflexColumnConter}>
          <Text color="textPrimary" testID="ratingAverage">
            {numberFormatter(item.ratingAverage)}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
      {details && <Button text="Open in GitHub" onPress={handleGitHub} />}
    </View>
  );
};
