import React from "react";
import { useState } from "react";
import { Text, View, Button, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { globalStyles, measurementsStyles, radioBtn } from "../styles/style";

import {
  additionalDataOne,
  additionalDataTwo,
  additionalDataThree,
} from "../data/data";
import { IMeasurement } from "types";

interface IProps {
  addMeasurements: (data: IMeasurement) => void;
}

export const Measurements = ({ addMeasurements }: IProps) => {
  const [userAdditionalDataOne, setUserAdditionalDataOne] =
    useState<string>("");
  const [userAdditionalDataTwo, setUserAdditionalDataTwo] =
    useState<string>("");
  const [userAdditionalDataThree, setUserAdditionalDataThree] =
    useState<string>("");

  return (
    <View style={measurementsStyles.container}>
      <Text style={measurementsStyles.title}>Новое измерение</Text>
      <Formik
        initialValues={{
          pressureS: "",
          pressureD: "",
          pulse: "",
          additionalData: {
            additionalDataOne: "",
            additionalDataTwo: "",
            additionalDataThree: "",
          },
        }}
        onSubmit={(values: IMeasurement, action) => {
          addMeasurements(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <View>
              <View style={measurementsStyles.pressureText}>
                <Text style={{ paddingRight: 15 }}>Систолическое</Text>
                <Text style={{ paddingRight: 40 }}>Диастолическое</Text>
                <Text style={{ paddingRight: 30 }}>Пульс</Text>
              </View>

              <View style={measurementsStyles.pressureText}>
                <TextInput
                  style={measurementsStyles.pressureInputs}
                  keyboardType="numeric"
                  maxLength={3}
                  placeholder="_ _ _"
                  value={props.values.pressureS}
                  onChangeText={props.handleChange("pressureS")}
                />
                <TextInput
                  style={[
                    measurementsStyles.pressureInputs,
                    { marginHorizontal: 15 },
                  ]}
                  keyboardType="numeric"
                  maxLength={3}
                  placeholder="_ _ _"
                  value={props.values.pressureD}
                  onChangeText={props.handleChange("pressureD")}
                />
                <TextInput
                  style={measurementsStyles.pressureInputs}
                  keyboardType="numeric"
                  maxLength={3}
                  placeholder="_ _ _"
                  value={props.values.pulse}
                  onChangeText={props.handleChange("pulse")}
                />
              </View>
            </View>

            <View style={{ marginVertical: 15 }}>
              <Text>Input range</Text>
            </View>

            <Text style={measurementsStyles.additionalData}>
              Дополнительные данные
            </Text>
            <View style={measurementsStyles.radioBtnContainer}>
              {additionalDataOne.map((item) => {
                return (
                  <Pressable
                    style={
                      item.value === userAdditionalDataOne
                        ? measurementsStyles.selected
                        : measurementsStyles.unselected
                    }
                    key={item.id}
                    onPress={() => {
                      setUserAdditionalDataOne(item.value);
                      props.values.additionalData.additionalDataOne =
                        item.value;
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
                      item.value === userAdditionalDataTwo
                        ? measurementsStyles.selected
                        : measurementsStyles.unselected
                    }
                    key={item.id}
                    onPress={() => {
                      setUserAdditionalDataTwo(item.value);
                      props.values.additionalData.additionalDataTwo =
                        item.value;
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
                      item.value === userAdditionalDataThree
                        ? measurementsStyles.selected
                        : measurementsStyles.unselected
                    }
                    key={item.id}
                    onPress={() => {
                      setUserAdditionalDataThree(item.value);
                      props.values.additionalData.additionalDataThree =
                        item.value;
                    }}
                  >
                    <Text>{item.value}</Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={{ position: "absolute", width: "100%", bottom: -120 }}>
              <Button title="Сохранить" onPress={() => props.handleSubmit()} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
