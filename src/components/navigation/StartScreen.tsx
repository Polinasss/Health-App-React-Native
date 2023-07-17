import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "types/navigation";
import { getRegistrationData, isStartScreen } from "components";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "UserGender", "Main">;

export const StartScreen = () => {
  const navigation = useNavigation<userNavigationScreenType>();

  useEffect(() => {
    startScreen()
  }, []);

  async function startScreen () {
    await getRegistrationData();
    await isStartScreen !== false ? loadHomeScene() : loadScene();
  }

  const loadScene = () => {
    navigation.navigate("UserGender");
  };

  const loadHomeScene = () => {
    navigation.navigate("Main");
  };

  return (
    <></>
  );
};
