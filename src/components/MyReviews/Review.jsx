import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { theme } from "../../theme";
import Text from "../utils/Text";
import Button from "../utils/Button";
import { useHistory } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

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

const Review = ({ item, refetch }) => {
  const history = useHistory();
  const { deleteReview } = useDeleteReview();

  const formatedCreatedAt = new Date(item.createdAt).toLocaleDateString(
    "fi-FI"
  );

  const handleView = () => {
    history.push(`/repository/${item.repository.id}`);
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: null,
          style: "cancel",
        },
        {
          text: "DELETE",
          onPress: () => {
            deleteReview({ id: item.id });
            refetch();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRowContainer}>
        <View style={styles.circle}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.flexColumnContainer}>
          <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
            {item.repository.fullName}
          </Text>
          <Text color="textSecondary">{formatedCreatedAt}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
      <View style={styles.flexRowContainer}>
        <Button text="View repository" onPress={handleView} />
        <Button text="Delete review" onPress={handleDelete} primary={false} />
      </View>
    </View>
  );
};

export default Review;
