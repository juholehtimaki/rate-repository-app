import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "./../graphql/queries";

const useRepositories = (query) => {
  console.log(query);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: query,
  });

  let repositories = [];

  if (data) repositories = data.repositories.edges.map(({ node }) => node);

  return { repositories, error, loading };
};

export default useRepositories;
