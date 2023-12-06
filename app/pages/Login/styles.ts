import { StyleSheet } from "react-native";
import { deviceWidth } from "app/utils/res";
import { scale } from "app/utils/scale";
import { Spacing, Typography } from "app/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    ...Typography.heading.h1,
    ...Typography.alignCenter,
    fontWeight: "bold",
    marginBottom: 80,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAC3C6",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  secondaryButtonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  footer: {
    marginTop: "auto",
    marginBottom: 20,
  },
  image: {
    width: deviceWidth,
    height: scale(300),
    marginVertical: scale(Spacing.base.medium),
  },
});
