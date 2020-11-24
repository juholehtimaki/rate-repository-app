import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "../utils/FormikTextInput";
import Button from "../utils/Button";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const validationSchhema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must be longer")
    .max(30, "Username must be shorted")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be longer")
    .max(50, "Password must be shorter")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchhema}
    >
      {({ handleSubmit }) => (
        <>
          <View style={styles.container}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              testID="username"
            />
          </View>
          <View style={styles.container}>
            <FormikTextInput
              name="password"
              placeholder="Password"
              testID="password"
              secureTextEntry
            />
          </View>
          <View style={styles.container}>
            <FormikTextInput
              name="passwordConfirmation"
              placeholder="Password confirmation"
              secureTextEntry
            />
          </View>
          <Button onPress={handleSubmit} text="Sign in" />
        </>
      )}
    </Formik>
  );
};
