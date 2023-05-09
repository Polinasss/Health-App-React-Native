import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/style";

export const UserWeight = ({ navigation }) => {
  const loadHomeScene = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Введите свой вес</Text>
      <TextInput
        style={globalStyles.input}
        keyboardType="numeric"
        maxLength={3}
        placeholder="_ _ _"
      ></TextInput>
      <View style={globalStyles.btnContainer}>
        <Pressable style={globalStyles.button} onPress={loadHomeScene}>
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
