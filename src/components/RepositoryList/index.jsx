import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

import { RepositoryItem } from "./RepositoryItem";
import ItemSeparator from "../utils/ItemSeparator";
import useRepositories from "../../hooks/useRepositories";

export const RepositoryListContainer = ({ repositories }) => {
  return (
    <View>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Link to={`/repository/${item.id}`} component={TouchableOpacity}>
            <RepositoryItem item={item} details={false} />
          </Link>
        )}
      />
    </View>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
