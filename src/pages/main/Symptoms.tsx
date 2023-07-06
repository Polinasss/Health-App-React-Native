import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { symptomsStyles, homeInfoStyles, globalStyles } from "styles";
import { userSymptomsData } from ".";
import { ISymptoms } from "types";

export const Symptoms: React.FC<ISymptoms> = ({dateProps, addSymptoms, editSymptomsDataState}) => {
  const { control, handleSubmit } = useForm();

  console.log(editSymptomsDataState[0]);

  const submitData = async (data: object) => {
    if(editSymptomsDataState[0].date !== "") {
        userSymptomsData.find((el) => el.date === dateProps).symptoms = Object.values(data)[0].trim();
    } else {
        userSymptomsData.push({ date: dateProps, symptoms: Object.values(data)[0].trim()});
    }
    addSymptoms(userSymptomsData);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={symptomsStyles.container}>
        <View style={symptomsStyles.symptomsBlock}>

          <View style={{width: "100%"}}>
            <Text style={[homeInfoStyles.calendarTitle, {paddingTop: 0}]}>Симптомы</Text>
            <Text>{dateProps}</Text>
          </View>

          <View style={{width: "100%", height: "60%"}}>
            <Controller
            control={control}
            name="symptoms"
            rules={{ required: "Введите текст" }}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
            }) => (
                <>
                    {error && (
                        <Text style={[globalStyles.errorMessage, {marginTop: 0}]}>
                            {error.message || "Error"}
                        </Text>
                    )}
                    <TextInput
                        style={[symptomsStyles.textInput, { borderColor: error ? "orange" : "gray" }]}
                        onChangeText={onChange}
                        value={value}
                        onBlur={onBlur}
                        multiline={true}
                        placeholder="Введите текст"
                        defaultValue={editSymptomsDataState[0].symptoms === "" ? undefined : editSymptomsDataState[0].symptoms}
                    />
                </>
            )}/>
          </View>

          <View style={{width: "100%"}}>
            <Pressable style={globalStyles.button} onPress={handleSubmit(submitData)}>
                <Text style={globalStyles.buttonText}>Сохранить</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
