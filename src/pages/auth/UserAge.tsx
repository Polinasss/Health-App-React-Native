import React from "react";
import { Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globalStyles } from "../../styles/style";

import { userDataRegistration } from "../../data/data";
import { AuthStackParamList } from "../../router/navigation";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "UserWeight">;

export const UserAge = () => {
  const navigation = useNavigation<userNavigationScreenType>();
  const { control, handleSubmit } = useForm();

  const loadScene = (data: object): void => {
    userDataRegistration.push(data);
    navigation.navigate("UserWeight");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Введите свой возраст</Text>
      <View>
        <Controller
          control={control}
          name="age"
          rules={{ required: "Введите возраст",  }}
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
                style={[globalStyles.input, { borderColor: error ? "orange" : "gray" }]}
              ></TextInput>
              {error && <Text style={globalStyles.errorMessage}>{error.message || "Error"}</Text>}
            </View>
          )}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <Pressable
          style={globalStyles.button}
          onPress={handleSubmit(loadScene)}
        >
          <Text style={globalStyles.btnText}>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  );
};
