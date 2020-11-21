import { Platform } from "react-native";

export const theme = {
  colors: {
    headerBackgroundColor: "#24292e",
    textHeader: "white",
    textPrimary: "#24292e",
    textSecondary: "#586069",
    backgroundColor: "white",
    buttonColor: "blue",
    errorColor: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  images: {
    borderRadius: 10,
  },
};
