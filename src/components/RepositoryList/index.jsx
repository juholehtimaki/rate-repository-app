import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { RepositoryItem } from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "grey",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <View>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </View>
  );
};

export default RepositoryList;
