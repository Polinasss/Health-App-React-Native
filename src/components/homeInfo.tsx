import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { homeInfoStyles } from "../styles/style";

import { Measurements } from "./measurements";

export const HomeInfo = () => {
  const [modalWindow, setModalWindow] = useState(false); // появление/исчезновение модального окна
  const [measurementsState, setMeasurementsState] = useState([
    {
      id: "",
      pressureS: "",
      pressureD: "",
      pulse: "",
      additionalData: {
        additionalDataOne: "",
        additionalDataTwo: "",
        additionalDataThree: "",
      },
    },
  ]);

  const addMeasurements = (obj: object): void => {
    setModalWindow(false); // закрываем модальное окно
    setMeasurementsState((list: object) => {
      // добавляем новую карточку в "Важное"
      obj.id = Math.random().toString();
      return [obj, ...list];
    });
  };

  return (
    <SafeAreaView>
      <Modal visible={modalWindow}>
        <AntDesign
          name="closecircleo"
          size={24}
          color="black"
          onPress={() => {
            setModalWindow(false);
          }}
        />
        <Measurements addMeasurements={addMeasurements} />
      </Modal>
      <Text style={[homeInfoStyles.userInfoTitles, { marginTop: 20 }]}>
        Важное
      </Text>
      <View style={homeInfoStyles.userInfoContainer}>
        <Text style={[homeInfoStyles.userInfoText, { minHeight: 70 }]}>
          Когда вы настроите уведомления здесь будет находится список
          напоминаний на день об измерении давления и лекарствах
        </Text>
      </View>
      <Text style={homeInfoStyles.userInfoTitles}>Измерения</Text>
      <FlatList style={{}}
        data={measurementsState}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Pressable
              style={
                item.pressureS == "" &&
                item.pressureD == "" &&
                item.pulse == "" &&
                item.additionalData.additionalDataOne == "" &&
                item.additionalData.additionalDataTwo == "" &&
                item.additionalData.additionalDataThree == ""
                  ? homeInfoStyles.importantCardNone
                  : homeInfoStyles.importantCard
              }
            >
              {item.pressureS === "" ? (
                item.pressureS
              ) : (
                <Text>{item.pressureS}</Text>
              )}
              {item.pressureD === "" ? (
                item.pressureD
              ) : (
                <Text>{item.pressureD}</Text>
              )}
              {item.pulse === "" ? item.pulse : <Text>{item.pulse}</Text>}
              {item.additionalData.additionalDataOne === "" ? (
                item.additionalData.additionalDataOne
              ) : (
                <Text>{item.additionalData.additionalDataOne}</Text>
              )}
              {item.additionalData.additionalDataTwo === "" ? (
                item.additionalData.additionalDataTwo
              ) : (
                <Text>{item.additionalData.additionalDataTwo}</Text>
              )}
              {item.additionalData.additionalDataThree === "" ? (
                item.additionalData.additionalDataThree
              ) : (
                <Text>{item.additionalData.additionalDataThree}</Text>
              )}
            </Pressable>
          </TouchableOpacity>
        )}
      />

      <Pressable
        onPress={() => {
          setModalWindow(true);
        }}
      >
        <View style={homeInfoStyles.userInfoContainer}>
          <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
        </View>
      </Pressable>
      <Text style={homeInfoStyles.userInfoTitles}>Симптомы</Text>
      <View style={homeInfoStyles.userInfoContainer}>
        <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
      </View>
      <Text style={homeInfoStyles.userInfoTitles}>Лекарства</Text>
      <View style={homeInfoStyles.userInfoContainer}>
        <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
      </View>
    </SafeAreaView>
  );
};
