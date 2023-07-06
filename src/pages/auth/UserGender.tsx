import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "types";
import { dataGender } from "data";
import { userDataRegistration } from "pages/main";
import { globalStyles, radioBtn } from "styles";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "UserAge", "Main">;

export const UserGender = () => {
  const navigation = useNavigation<userNavigationScreenType>();
  const [userOption, setUserOption] = useState<string>("");

  const loadScene = () => {
    userDataRegistration.push(["gender", `${userOption}`]);
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
      <View style={globalStyles.buttonContainer}>
        <Pressable style={globalStyles.button} onPress={loadHomeScene}>
          <Text style={globalStyles.buttonText}>Пропустить</Text>
        </Pressable>
        <Pressable
          style={[
            globalStyles.button,
            { backgroundColor: userOption == "" ? "gray" : "black" },
          ]}
          disabled={userOption == "" ? true : false}
          onPress={loadScene}
        >
          <Text style={globalStyles.buttonText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
