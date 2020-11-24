import React from "react";
import { FlatList } from "react-native";
import ItemSeparator from "../utils/ItemSeparator";
import useMyReviews from "../../hooks/useMyReviews";
import Review from "./Review";

const MyReviews = () => {
  const { reviews, refetch } = useMyReviews();
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review item={item} refetch={refetch} />}
    />
  );
};

export default MyReviews;
