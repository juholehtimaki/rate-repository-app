import React, { useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import RNPickerSelect from "react-native-picker-select";

import { RepositoryItem } from "./RepositoryItem";
import ItemSeparator from "../utils/ItemSeparator";
import useRepositories from "../../hooks/useRepositories";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

export const RepositoryListContainer = ({
  repositories,
  currQueryString,
  handleQueryChange,
  filter,
  setFilter,
}) => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <Searchbar
              placeholder="Search"
              value={filter}
              onChangeText={(query) => setFilter(query)}
            />
            <RNPickerSelect
              onValueChange={(value) => handleQueryChange(value)}
              items={[
                {
                  label: "Latest repositories",
                  value: "CREATED_AT_DESC",
                },
                {
                  label: "Highest rated repositories",
                  value: "RATING_AVERAGE_DESC",
                },
                {
                  label: "Lowest rated repositores",
                  value: "RATING_AVERAGE_ASC",
                },
              ]}
              value={currQueryString}
            />
          </>
        }
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

/* RNPickerSelect does not support objects as values hence query string */
const RepositoryList = () => {
  const [query, setQuery] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const [filter, setFilter] = useState("");
  const [searchKeyword] = useDebounce(filter, 500);

  const handleQueryChange = (queryString) => {
    if (queryString === "CREATED_AT_DESC")
      setQuery({
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      });
    if (queryString === "RATING_AVERAGE_DESC")
      setQuery({
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      });
    if (queryString === "RATING_AVERAGE_ASC")
      setQuery({
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      });
  };

  const currQueryString = `${query.orderBy}_${query.orderDirection}`;
  const { repositories } = useRepositories({
    ...query,
    searchKeyword,
  });

  return (
    <RepositoryListContainer
      repositories={repositories}
      currQueryString={currQueryString}
      setQuery={setQuery}
      handleQueryChange={handleQueryChange}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
