import React from "react";
import { SignUpContainer } from "./SignUpContainer";
import useSignup from "../../hooks/useSignup";
import useSignin from "../../hooks/useSignin";

const SignUp = () => {
  const [signUp] = useSignup();
  const [signIn] = useSignin();

  const onSubmit = async (values) => {
    try {
      console.log("attempting to sign up");
      await signUp(values);
      await signIn(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
