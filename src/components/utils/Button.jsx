import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
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

const Button = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.txt} testID="button">
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
