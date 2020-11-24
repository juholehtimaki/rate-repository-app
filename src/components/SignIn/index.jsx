import React from "react";

import useSignin from "../../hooks/useSignin";
import { SignInContainer } from "./SignInContainer";

const SignIn = () => {
  const [signIn] = useSignin();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
