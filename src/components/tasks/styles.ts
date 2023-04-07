import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  unFinishedText: {
    color: "#FFFFFF",
    flex: 1,
    fontSize: 14,
    marginLeft: 16,
  },

  finishedText: {
    color: "#90909090",
    flex: 1,
    fontSize: 14,
    marginLeft: 16,
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },

  checkbox: {
    borderRadius: 50,
    height: 20,
    width: 20,
    borderColor: "#1E6F9F",
  },
});
