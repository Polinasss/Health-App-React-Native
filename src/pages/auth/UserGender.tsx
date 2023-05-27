import React, { useState } from "react";
import { Text, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globalStyles, radioBtn } from "../../styles/style";

import { userDataRegistration } from "../../data/data";
import { dataGender } from "../../data/data";
import { AuthStackParamList } from "../../router/navigation";

type userNavigationScreenType = StackNavigationProp<
  AuthStackParamList,
  "UserAge",
  "Main"
>;

export const UserGender = () => {
  const navigation = useNavigation<userNavigationScreenType>();
  
  const [userOption, setUserOption] = useState("");

  const loadScene = () => {
      userDataRegistration.push({ gender: `${userOption}` });
      navigation.navigate("UserAge");
  };

  const loadHomeScene = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Выберите пол</Text>
      <View style={radioBtn.container}>
        {dataGender.map((item) => {
          return (
            <Pressable
              key={item.value}
              style={
                item.value === userOption
                  ? radioBtn.selected
                  : radioBtn.unselected
              }
              onPress={() => setUserOption(item.value)}
            >
              <Text>{item.value}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={globalStyles.btnContainer}>
        <Pressable style={globalStyles.button} onPress={loadHomeScene}>
          <Text style={globalStyles.btnText}>Пропустить</Text>
        </Pressable>
        <Pressable style={[ globalStyles.button, {backgroundColor: userOption == "" ? "gray" : "black"}]} disabled={userOption == "" ? true : false} onPress={loadScene}>
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
