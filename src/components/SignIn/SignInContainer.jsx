import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "../utils/FormikTextInput";
import { theme } from "../../theme";
import useSignin from "../../hooks/useSignin";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    padding: 12,
    backgroundColor: theme.colors.buttonColor,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    textAlign: "center",
    color: theme.colors.textHeader,
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
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.txt} testID="signin">
                Sign in
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </Formik>
  );
};
