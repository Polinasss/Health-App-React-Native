import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 900,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    width: "100%",
    marginBottom: 12,
  },
  btnText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center",
    borderRadius: 8,
    width: 120,
    height: 50,
    marginTop: 30,
    fontSize: 16,
  },
});

export const radioBtn = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 160,
    justifyContent: "space-between",
    marginTop: 32,
  },
  unselected: {
    backgroundColor: "#DEDEDE",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: "#979797",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
