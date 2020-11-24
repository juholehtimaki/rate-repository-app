import { useMutation } from "@apollo/react-hooks";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useHistory } from "react-router-native";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async (values) => {
    const data = await mutate({
      variables: values,
    });
    const repositoryId = data.data.createReview.repositoryId;
    if (repositoryId) history.push(`/repository/${repositoryId}`);
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;
