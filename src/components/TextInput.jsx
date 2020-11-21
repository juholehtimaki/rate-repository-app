import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInputError: {
    borderColor: theme.colors.errorColor,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    styles.textInput,
    error && styles.textInputError,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
