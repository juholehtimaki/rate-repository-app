import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../graphql/mutations";

const useSignup = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async (values) => {
    const data = await mutate({
      variables: values,
    });
    return data;
  };

  return [signUp, result];
};

export default useSignup;
