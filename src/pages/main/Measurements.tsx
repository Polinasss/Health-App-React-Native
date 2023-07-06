import React, { useState } from "react";
import { Text, View, TextInput, Pressable, SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";
import * as Crypto from "expo-crypto";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";
import { globalStyles, measurementsStyles } from "../../styles/style";
import { additionalDataOne, additionalDataTwo, additionalDataThree } from "../../data";
import { IMeasurement, IPropsMeasurements } from "types";
import { getStatusMeasurements, getPreasure, getUserRegistrationData } from "../../components";

export const Measurements = ({ addMeasurements, dateProps, editMeasurements }: IPropsMeasurements) => {
  let startValue_UserAdditionalDataOne = editMeasurements.additionalDataOne === "" ? "" : editMeasurements.additionalDataOne;
  let startValue_UserAdditionalDataTwo = editMeasurements.additionalDataTwo === "" ? "" : editMeasurements.additionalDataTwo;
  let startValue_UserAdditionalDataThree = editMeasurements.additionalDataThree === "" ? "" : editMeasurements.additionalDataThree;

  const [userAdditionalDataOne, setUserAdditionalDataOne] = useState<string>(startValue_UserAdditionalDataOne);
  const [userAdditionalDataTwo, setUserAdditionalDataTwo] = useState<string>(startValue_UserAdditionalDataTwo);
  const [userAdditionalDataThree, setUserAdditionalDataThree] = useState<string>(startValue_UserAdditionalDataThree);
  const [errorPreasure, setErrorPreasure] = useState<string>("");

  const isFormFilledOut = (obj: object) => {
    return Object.values(obj).every((element) => element.trim());
  };

  const updateError = (
    error: string,
    stateUpdater: React.Dispatch<React.SetStateAction<string>>
  ) => {
    stateUpdater(error);
    setTimeout(() => { stateUpdater(""); }, 2500);
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Formik
        initialValues={{
          id:
            editMeasurements.id === ""
              ? Crypto.randomUUID()
              : editMeasurements.id,
          date: dateProps,
          pressureS:
            editMeasurements.pressureS === "" ? "" : editMeasurements.pressureS,
          pressureD:
            editMeasurements.pressureD === "" ? "" : editMeasurements.pressureD,
          pulse: editMeasurements.pulse === "" ? "" : editMeasurements.pulse,
          additionalDataOne:
            editMeasurements.additionalDataOne === ""
              ? ""
              : editMeasurements.additionalDataOne,
          additionalDataTwo:
            editMeasurements.additionalDataTwo === ""
              ? ""
              : editMeasurements.additionalDataTwo,
          additionalDataThree:
            editMeasurements.additionalDataThree === ""
              ? ""
              : editMeasurements.additionalDataThree,
          rangePreasure: "",
        }}
        onSubmit={(values: IMeasurement, action) => {
          values.rangePreasure = getStatusMeasurements(Number(getUserRegistrationData[1][1]), Number(values.pressureS));
          values.additionalDataOne = userAdditionalDataOne;
          values.additionalDataTwo = userAdditionalDataTwo;
          values.additionalDataThree = userAdditionalDataThree;

          if (!isFormFilledOut(values)) { 
            return updateError("Все поля обязательны для заполнения! Заполните правильно :)", setErrorPreasure); 
          } else {
            if ( values.pressureD.length < 2 || values.pressureS.length < 2 || values.pulse.length < 2) {
              return updateError("Значения должны быть двузначные >:(", setErrorPreasure);
            } else {
              if ( (Number(values.pressureS) < 60 || (Number(values.pressureS) > 170)) || ((Number(values.pressureD)) < 50 || Number(values.pressureD) > 95) || (Number(values.pulse) < 45 || Number(values.pulse) > 200) ) {
                return updateError("Такого значения не может быть", setErrorPreasure);
                } else {
                addMeasurements(values, dateProps);
                action.resetForm();
              };
            };
          };
        }}
      >
        {(props) => (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ height: "100%" }}>
              <Text style={measurementsStyles.title}>
                {props.values.id === editMeasurements.id
                  ? "Редактировать существующее измерение"
                  : "Новое измерение"}
              </Text>
              <Text style={{ marginBottom: 20 }}>{dateProps}</Text>

              <View>
                <View style={measurementsStyles.pressureContainer}>
                  <View>
                    <Text style={measurementsStyles.pressureText}>
                      Систолическое
                    </Text>
                    <TextInput
                      style={
                        errorPreasure !== ""
                          ? (props.values.pressureS.length < 2 || Number(props.values.pressureS) < 60 || Number(props.values.pressureS) > 170)
                            ? measurementsStyles.pressureInputsError
                            : measurementsStyles.pressureInputs
                          : measurementsStyles.pressureInputs
                      }
                      keyboardType="numeric"
                      maxLength={3}
                      placeholder="_ _ _"
                      defaultValue={props.values.pressureS}
                      onChangeText={props.handleChange("pressureS")}
                    />
                  </View>

                  <View>
                    <Text style={measurementsStyles.pressureText}>
                      Диастолическое
                    </Text>
                    <TextInput
                      style={[
                        errorPreasure !== ""
                          ? (props.values.pressureD.length < 2 || Number(props.values.pressureD) < 50 || Number(props.values.pressureD) > 95)
                            ? measurementsStyles.pressureInputsError
                            : measurementsStyles.pressureInputs
                          : measurementsStyles.pressureInputs,
                        { marginHorizontal: 15 },
                      ]}
                      keyboardType="numeric"
                      maxLength={3}
                      placeholder="_ _ _"
                      defaultValue={props.values.pressureD}
                      onChangeText={props.handleChange("pressureD")}
                    />
                  </View>

                  <View>
                    <Text style={measurementsStyles.pressureText}>Пульс</Text>
                    <TextInput
                      style={
                        errorPreasure !== ""
                          ? (props.values.pulse.length < 2 || Number(props.values.pulse) < 45 || Number(props.values.pulse) > 200)
                            ? measurementsStyles.pressureInputsError
                            : measurementsStyles.pressureInputs
                          : measurementsStyles.pressureInputs
                      }
                      keyboardType="numeric"
                      maxLength={3}
                      placeholder="_ _ _"
                      defaultValue={props.values.pulse}
                      onChangeText={props.handleChange("pulse")}
                    />
                  </View>
                </View>
              </View>

              {errorPreasure ? (
                <View style={measurementsStyles.errorContainer}>
                  <Text style={measurementsStyles.errorMessage}>{errorPreasure}</Text>
                </View>
              ) : null}

              <View style={measurementsStyles.inputRangeContainer}>
                <Text>
                  {getStatusMeasurements(Number(getUserRegistrationData[1][1]), Number(props.values.pressureS))}
                </Text>
                <LinearGradient
                  style={measurementsStyles.linearGradientRange}
                  colors={["#ff0000", "#ffcd00", "#5eff00", "#ffcd00", "#ff0000",]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <Slider
                    style={measurementsStyles.inputRange}
                    disabled
                    minimumValue={0}
                    maximumValue={2}
                    value={getPreasure(21, Number(props.values.pressureS))}
                    thumbTintColor="black"
                    minimumTrackTintColor="rgba(0, 0, 0, 0.2)"
                    maximumTrackTintColor="black"
                  ></Slider>
                </LinearGradient>
              </View>

              <Text style={measurementsStyles.additionalData}>
                Дополнительные данные
              </Text>
              <View style={measurementsStyles.radioBtnContainer}>
                {additionalDataOne.map((item) => {
                  return (
                    <Pressable
                    style={
                      errorPreasure !== ""
                        ? props.values.additionalDataOne === ""
                          ? measurementsStyles.additionalDataError
                          : item.value === userAdditionalDataOne
                          ? measurementsStyles.selected
                          : measurementsStyles.unselected
                        : item.value === userAdditionalDataOne
                        ? measurementsStyles.selected
                        : measurementsStyles.unselected
                    }
                      key={item.id}
                      onPress={() => {
                        setUserAdditionalDataOne(item.value === userAdditionalDataOne ? "" : item.value);
                        props.values.additionalDataOne = item.value;
                      }}
                    >
                      <Text>{item.value}</Text>
                    </Pressable>
                  );
                })}
              </View>
              <View style={measurementsStyles.radioBtnContainer}>
                {additionalDataTwo.map((item) => {
                  return (
                    <Pressable
                    style={
                      errorPreasure !== ""
                        ? props.values.additionalDataTwo === ""
                          ? measurementsStyles.additionalDataError
                          : item.value === userAdditionalDataTwo
                          ? measurementsStyles.selected
                          : measurementsStyles.unselected
                        : item.value === userAdditionalDataTwo
                        ? measurementsStyles.selected
                        : measurementsStyles.unselected
                    }
                      key={item.id}
                      onPress={() => {
                        setUserAdditionalDataTwo(item.value === userAdditionalDataTwo ? "" : item.value);
                        props.values.additionalDataTwo = item.value;
                      }}
                    >
                      <Text>{item.value}</Text>
                    </Pressable>
                  );
                })}
              </View>
              <View style={measurementsStyles.radioBtnContainer}>
                {additionalDataThree.map((item) => {
                  return (
                    <Pressable
                      style={
                        errorPreasure !== ""
                          ? props.values.additionalDataThree === ""
                            ? measurementsStyles.additionalDataError
                            : item.value === userAdditionalDataThree
                            ? measurementsStyles.selected
                            : measurementsStyles.unselected
                          : item.value === userAdditionalDataThree
                          ? measurementsStyles.selected
                          : measurementsStyles.unselected
                      }
                      key={item.id}
                      onPress={() => {
                        setUserAdditionalDataThree(item.value === userAdditionalDataThree ? "" : item.value);
                        props.values.additionalDataThree = item.value;
                      }}
                    >
                      <Text>{item.value}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View style={globalStyles.buttonContainer}>
                <LinearGradient
                  locations={[0, 0.6]}
                  colors={["rgba(250,250,250,0)", "rgba(250,250,250,1)"]}
                  style={measurementsStyles.linearGradient}
                >
                  <Pressable
                    style={globalStyles.button}
                    onPress={() => props.handleSubmit()}
                  >
                    <Text style={globalStyles.buttonText}>Сохранить</Text>
                  </Pressable>
                </LinearGradient>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </SafeAreaView>
  );
};
