import { SignInContainer } from "./SignInContainer";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import React from "react";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId("username"), "kalle");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("button"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
