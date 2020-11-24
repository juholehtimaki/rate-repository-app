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
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
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
          <Button onPress={handleSubmit} text="Sign in" />
        </>
      )}
    </Formik>
  );
};
