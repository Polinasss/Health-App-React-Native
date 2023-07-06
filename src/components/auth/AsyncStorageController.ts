import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setRegistrationData(userDataRegistration: any[]) {
  try {
    await AsyncStorage.multiSet(userDataRegistration);
    getRegistrationData();
  } catch (error) {
    console.log(error);
  }
}

export let getUserRegistrationData;
export let isStartScreen = false;

export async function getRegistrationData() {
  try {
    let registrationData = await AsyncStorage.multiGet([ "gender", "age", "weight" ]);
    if (registrationData[1][1] !== null) {
      getUserRegistrationData = registrationData;
      console.log(getUserRegistrationData);
      isStartScreen = true;
    } else {
      console.log("you have no data");
      isStartScreen = false;
    }
  } catch (error) {
    console.log(error);
  }
}