import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import useReviews from "../../hooks/useReviews";
import { RepositoryItem } from "../RepositoryList/RepositoryItem";
import { FlatList } from "react-native";
import ItemSeparator from "../utils/ItemSeparator";
import Review from "./Review";

const DetailedRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  const { reviews } = useReviews(id);
  if (loading) return null;
  return (
    <>
      <RepositoryItem item={repository} details={true} />
      <ItemSeparator />
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Review item={item} details={false} />}
      />
    </>
  );
};

export default DetailedRepository;
