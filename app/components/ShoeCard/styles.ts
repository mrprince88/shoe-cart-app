import { StyleSheet } from "react-native";
import { Spacing, Typography } from "app/styles";
import { scale } from "app/utils/scale";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    backgroundColor: "#fff",
    paddingHorizontal: Spacing.container,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  description: {
    fontSize: 15,
    color: "gray",
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    margin: 10,
  },
  addBtn: {
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    width: 100,
  },
  addBtnText: {
    ...Typography.alignCenter,
    fontSize: 14,
    color: "#000",
  },
  sizeContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  sizeBtn: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    marginRight: 5,
  },
  rightAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    ...Typography.alignCenter,
    paddingHorizontal: Spacing.base.medium,
  },
  controls: {
    width: scale(88),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAC3C6",
  },
  controlsDanger: {
    width: scale(88),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EC0D28",
  },
  deleteBtn: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    width: 100,
    borderColor: "#EC0D28",
  },
  deleteBtnText: {
    ...Typography.alignCenter,
    paddingHorizontal: Spacing.base.medium,
    color: "#EC0D28",
  },
});
