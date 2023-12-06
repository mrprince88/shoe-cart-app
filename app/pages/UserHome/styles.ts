import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 16,
    marginBottom: 16,
  },
  badge: {
    width: 24,
    height: 16,
    backgroundColor: "#FAC3C6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -14,
    top: -8,
  },
  badgeText: {
    lineHeight: 14,
    color: "#fff",
  },
});
