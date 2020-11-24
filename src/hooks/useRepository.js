import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORY } from "./../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });

  let repository = {};

  if (data) repository = data.repository;

  return { repository, error, loading };
};

export default useRepository;
