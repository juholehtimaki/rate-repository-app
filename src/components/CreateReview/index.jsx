import React from "react";

import { CreateReviewContainer } from "./CreateReviewContainer";
import useCreateReview from "../../hooks/useCreateReview";

const CreateReview = () => {
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const parsedValues = { ...values };
      parsedValues.rating = parseInt(parsedValues.rating);
      createReview(parsedValues);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
