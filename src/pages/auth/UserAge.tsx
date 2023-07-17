import React from "react";
import { Text, View, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList, IFormValue } from "types";
import { userDataRegistration } from "pages/main";
import { globalStyles } from "styles";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "UserWeight">;

export const UserAge = () => {
  const navigation = useNavigation<userNavigationScreenType>();

  const { control, handleSubmit } = useForm<IFormValue>();

  const loadScene: SubmitHandler<IFormValue> = (data): void => {
    userDataRegistration.push(["age", ...Object.values(data)]);
    navigation.navigate("UserWeight");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Введите свой возраст</Text>
        <View>
          <Controller
            control={control}
            name="age"
            rules={{ required: "Введите возраст" }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <View>
                <TextInput
                  keyboardType="numeric"
                  maxLength={2}
                  placeholder="_ _"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={[
                    globalStyles.textInput,
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
        <View style={globalStyles.buttonContainer}>
          <Pressable
            style={globalStyles.button}
            onPress={handleSubmit(loadScene)}
          >
            <Text style={globalStyles.buttonText}>Продолжить</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
