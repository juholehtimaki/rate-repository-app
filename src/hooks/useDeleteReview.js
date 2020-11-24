import { useMutation } from "@apollo/react-hooks";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (values) => {
    const data = await mutate({
      variables: values,
    });
    return data;
  };

  return { deleteReview, result };
};

export default useDeleteReview;
