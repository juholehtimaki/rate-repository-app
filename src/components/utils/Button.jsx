import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  primaryButton: {
    padding: 12,
    backgroundColor: theme.colors.buttonColor,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  secondaryButton: {
    padding: 12,
    backgroundColor: theme.colors.errorColor,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    textAlign: "center",
    color: theme.colors.textHeader,
  },
});

const Button = ({ text, onPress, primary = true }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={primary ? styles.primaryButton : styles.secondaryButton}>
        <Text style={styles.txt} testID="button">
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
