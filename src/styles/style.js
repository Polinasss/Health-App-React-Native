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
  buttonContainer: {
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
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
    color: "white",
  },
  textInput: {
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
  errorMessage: {
    textAlign: "center",
    margin: 0,
    marginTop: 10,
    color: "#FD9346",
  },
  safeAreaContainer: {
    paddingLeft: 15,
    paddingRight: 15,
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

export const homeInfoStyles = StyleSheet.create({
  calendarTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  bell: {
    position: "absolute",
    zIndex: 1,
    top: "-15%",
    right: 10,
    display: "flex",
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  userInfoTitles: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 10,
  },
  userInfoText: {
    fontSize: 12,
    color: "#979797",
  },
  userInfoContainer: {
    minHeight: 50,
  },
  importantCard: {
    display: "flex",
    padding: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    marginBottom: 10,
  },
  importantCardBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  importantCardSideBlock: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  importantCardSideBlockTwo: {
    display: "flex",
    flexDirection: "column",
  },
  importantCardText: {
    color: "#626262",
  },
  importantCardMeasurements: {
    fontWeight: "bold",
    fontSize: 14,
  },
  importantCardAditionalInfo: {
    display: "flex",
    backgroundColor: "white",
    marginRight: 9,
    textAlign: "center",
    padding: 6,
    borderRadius: 5,
  },
  trash: {
    height: "88%",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "orange",
    borderRadius: 15,
  },
});

export const calendarStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
  },
  today: {
    backgroundColor: "#979797",
    order: 0,
    position: "relative",
  },
  notToday: {
    backgroundColor: "#D9D9D9",
  },
});

export const measurementsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  pressureContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  pressureText: {
    textAlign: "center",
    marginBottom: 6,
  },
  pressureInputs: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center",
    borderRadius: 8,
    width: 100,
    height: 50,
  },
  pressureInputsError: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "orange",
    textAlign: "center",
    borderRadius: 8,
    width: 100,
    height: 50,
  },
  additionalData: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
  },
  radioBtnContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
    marginLeft: -5,
  },
  unselected: {
    backgroundColor: "#DEDEDE",
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  additionalDataError: {
    backgroundColor: "#DEDEDE",
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: "orange",
    borderWidth: 1,
  },
  selected: {
    backgroundColor: "#979797",
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  antDesign: {
    position: "absolute",
    top: 20,
    right: 25,
    zIndex: 1,
  },
  inputRangeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  inputRange: {
    width: "100%",
    height: 30,
  },
  errorContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  errorMessage: { color: "orange", textAlign: "center" },
  linearGradientRange: { width: "100%", height: 30, borderRadius: 20 },
  linearGradient: {
    height: 130,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export const chartsStyles = StyleSheet.create({
  settings: {
    position: "absolute",
    top: "4.5%",
    right: 0,
    transform: [{ rotate: "90deg" }],
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    paddingTop: 20,
  },
  radiBtncontainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  unselected: {
    backgroundColor: "#DEDEDE",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  selected: {
    backgroundColor: "#979797",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  dateChangerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingHorizontal: "10%",
  },
});

export const symptomsStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  symptomsBlock: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: "solid",
    borderRadius: 20,
    padding: 15,
    textAlignVertical: "top",
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: "90%",
  },
  cardBlock: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  }
});
