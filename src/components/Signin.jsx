import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import { theme } from "../theme";

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

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = ({ username, password }) => {
    console.log("username:", username);
    console.log("password:", password);
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
            <FormikTextInput name="username" placeholder="Username" />
          </View>
          <View style={styles.container}>
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.txt}>Sign in</Text>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </Formik>
  );
};

export default SignIn;
