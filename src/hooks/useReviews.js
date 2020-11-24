import { useQuery } from "@apollo/react-hooks";
import { GET_REVIEWS } from "./../graphql/queries";

const useReviews = (id) => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });

  let reviews = [];

  if (data) reviews = data.repository.reviews.edges.map(({ node }) => node);

  return { reviews, error, loading };
};

export default useReviews;
