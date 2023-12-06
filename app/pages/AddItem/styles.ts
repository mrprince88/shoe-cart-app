import { StyleSheet } from "react-native";
import { Spacing } from "app/styles";

export default StyleSheet.create({
  modalCont: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  container: {
    paddingHorizontal: Spacing.base.small,
  },
  footer: {
    paddingHorizontal: Spacing.container,
    marginTop: "auto",
    marginBottom: Spacing.base.medium,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAC3C6",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAC3C6",
  },
  sizeBtnContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  sizeBtn: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
  },
});
