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
  owner: yup.string().required("Owner of the repository is required"),
  name: yup.string().required("Name of the repository is required"),
  rating: yup
    .number()
    .max(100, "Rating must be in the range of 0-100")
    .min(0, "Rating must be in the range of 0-100")
    .required("Rating is required"),
  review: yup.string().optional(),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    owner: "",
    name: "",
    rating: "",
    review: "",
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
              name="owner"
              placeholder="Owner of the repository"
            />
          </View>
          <View style={styles.container}>
            <FormikTextInput name="name" placeholder="Name of the repository" />
          </View>
          <View style={styles.container}>
            <FormikTextInput name="rating" placeholder="Rating (0-100)" />
          </View>
          <View style={styles.container}>
            <FormikTextInput
              name="review"
              placeholder="Your review"
              multiline
            />
          </View>
          <Button onPress={handleSubmit} text="Create a review" />
        </>
      )}
    </Formik>
  );
};
