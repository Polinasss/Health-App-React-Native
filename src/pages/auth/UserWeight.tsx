import React from "react";
import { Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "router";
import { userDataRegistration } from "data";
import { globalStyles } from "styles";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "Main">;

export const UserWeight = () => {
  const navigation = useNavigation<userNavigationScreenType>();
  const { control, handleSubmit } = useForm();

  const loadHomeScene = (data: object): void => {
    userDataRegistration.push(data);
    console.log(userDataRegistration);
    navigation.navigate("Main");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Введите свой вес</Text>
      <View>
        <Controller
          control={control}
          name="weight"
          rules={{ required: "Введите вес" }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                keyboardType="numeric"
                maxLength={3}
                placeholder="_ _ _"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  globalStyles.input,
                  { borderColor: error ? "orange" : "gray" },
                ]}
              ></TextInput>
              {error && (
                <Text style={globalStyles.errorMessage}>
                  {error.message || "Error"}
                </Text>
              )}
            </View>
          )}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <Pressable
          style={globalStyles.button}
          onPress={handleSubmit(loadHomeScene)}
        >
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
