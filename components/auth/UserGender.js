import React, { useState } from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";

import { globalStyles } from "../../styles/style";
import { radioBtn } from "../../styles/style";

import { dataGender } from "../../data/data";

export const UserGender = ({ navigation }) => {
  const [userOption, setUserOption] = useState(null);

  const loadScene = () => {
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
              key={item.id}
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
        <Pressable style={globalStyles.button} onPress={loadScene}>
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
