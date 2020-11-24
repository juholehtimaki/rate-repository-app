import React from "react";

import useSignin from "../../hooks/useSignin";
import { SignInContainer } from "./SignInContainer";

const SignIn = () => {
  const [signIn] = useSignin();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      console.log("attempting to log in");
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
