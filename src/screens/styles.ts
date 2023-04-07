import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 173,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#454545",
    padding: 20,
  },

  buttonWrapper: {
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    top: -63,
    left: 20,
    padding: 33,
    flexDirection: "row",
  },
  input: {
    marginRight: 10,
    width: "100%",
    height: 56,
    padding: 16,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    borderColor: "#000",
    borderWidth: 1,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    marginTop: 40,
  },

  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  taskInfos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  tasksInfoText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  taskCountText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  countTextWrapper: {
    borderRadius: 10,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
  },
});
