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
  errorMessage: {
    textAlign: "center",
    margin: 0,
  },
  safeAreaContainer: {
    paddingLeft: 10,
    paddingRight: 10
  }
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
    fontWeight: 'bold',
    paddingTop: 10
  },
  bell: {
    position: "absolute",
    right: 25,
    top: 45,
    zIndex: 1
  },
  userInfoTitles: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 15,
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
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    height: 70,
    marginBottom: 10,
  },
  importantCardNone: {
    display: "none",
  }
})

export const calendarStyles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 40,
      marginTop: 10,
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      
  },
  day: {
      alignItems: "center",
      paddingHorizontal: 12,
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 20
  },
  today: {
      backgroundColor: '#979797',
      order: 0,
      position: 'relative',
  },
  notToday: {
    backgroundColor: '#D9D9D9',
}
});

export const measurementsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pressureText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
  additionalData: {
    fontSize: 16,
    fontWeight: "bold",
  },
  radioBtnContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  unselected: {
    backgroundColor: "#DEDEDE",
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: "#979797",
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
});