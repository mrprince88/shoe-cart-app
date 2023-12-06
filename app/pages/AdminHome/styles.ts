import { StyleSheet } from "react-native";
import { Spacing, Typography } from "app/styles";
import { scale } from "app/utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Spacing.container,
  },
  heading: {
    ...Typography.heading.h3,
    ...Typography.alignCenter,
    marginVertical: Spacing.base.medium,
  },

  floatingBtn: {
    position: "absolute",
    bottom: scale(45),
    right: scale(20),
    width: scale(60),
    height: scale(60),
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAC3C6",
  },

  floatingBtnIcon: {
    fontSize: scale(18),
    color: "#fff",
  },
});
