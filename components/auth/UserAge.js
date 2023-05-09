import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/style";

export const UserAge = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate("UserWeight");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Введите свой возраст</Text>
      <TextInput
        style={globalStyles.input}
        keyboardType="numeric"
        maxLength={2}
        placeholder="_ _"
      ></TextInput>
      <View style={globalStyles.btnContainer}>
        <Pressable style={globalStyles.button} onPress={loadScene}>
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
