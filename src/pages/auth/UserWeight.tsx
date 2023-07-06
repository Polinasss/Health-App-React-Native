import React from "react";
import { Text, View, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { StackNavigationProp } from "@react-navigation/stack";
import { setRegistrationData } from "components";
import { userDataRegistration } from "pages/main";
import { AuthStackParamList } from "types";
import { globalStyles } from "styles";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "Main">;

export const UserWeight = () => {
  const navigation = useNavigation<userNavigationScreenType>();

  const { control, handleSubmit } = useForm();

  const loadHomeScene = async (data: object) => {
    userDataRegistration.push(['weight', ...Object.values(data)]);
    setRegistrationData(userDataRegistration);
    navigation.reset({
      index: 0,
      routes: [{name: "Main"}],
    });;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          onPress={handleSubmit(loadHomeScene)}
        >
          <Text style={globalStyles.buttonText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};
