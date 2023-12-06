import { StyleSheet } from "react-native";
import { Spacing, Typography } from "app/styles";

export default StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.container,
    paddingVertical: Spacing.base.small + Spacing.base.xsmall,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: -1,
    alignSelf: "center",
  },
  heading: {
    ...Typography.text.large,
    textAlign: "center",
  },
  text: {
    ...Typography.text.default,
  },
  rightBtn: {
    alignSelf: "center",
  },
});
