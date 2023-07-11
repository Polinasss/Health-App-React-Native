import React, { useState, useEffect } from "react";
import { Text, View, Modal, Pressable, SafeAreaView, TouchableOpacity, FlatList, Alert, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, AntDesign } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Measurements } from "pages";
import { homeInfoStyles, measurementsStyles, symptomsStyles } from "styles";
import { IMeasurement, PropsOfTitle, AuthStackParamList, ISymptomsData } from "types";
import { startCalendarData } from "data";
import { Symptoms } from ".";

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "UserGender", "Notifications">;

export let testCalendarData: IMeasurement[] = [];
export let userDataRegistration: any[] = [];
export let userSymptomsData: ISymptomsData[] = [];

export const HomeInfo: React.FC<PropsOfTitle> = ({ userDate, sendAllMeasurementsData }) => {
  const navigation = useNavigation<userNavigationScreenType>();
  const [modalWindowMeasurements, setModalWindowMeasurements] = useState<boolean>(false);
  const [modalWindowSymptoms, setModalWindowSymptoms] = useState<boolean>(false);
  const [editMeasurements, setEditMeasurements] = useState<IMeasurement>(startCalendarData);
  const [calendarData, setCalendarData] = useState<IMeasurement[]>(testCalendarData);
  const [symptomsDataState, setSymptomsDataState] = useState<ISymptomsData[]>([{date: "", symptoms: ""}]);
  const [editSymptomsDataState, setEditSymptomsDataState] = useState<ISymptomsData[]>([{date: "", symptoms: ""}]);

  useEffect(() => { // measurements
    getAsyncStorageData();
  }, []);
  useEffect(() => { // measurements
    setAsyncStorageData();
  }, [testCalendarData]);
  useEffect(() => {  // symptoms
    getAsyncStorageDataSymptoms();
  }, []);
  useEffect(()=> { // symptoms
    setAsyncStorageDataSymptoms();
  }, [userSymptomsData]);

  const addMeasurements = async (obj: IMeasurement) => {
    //изменяет testCalendarData и контролирует состояния
    // ПОМЕНЯТЬ // сделаем проверку, есть ли такие же id у объектов в массиве. Если есть, то ничего не пушим, а редачим существующий объект
    setModalWindowMeasurements(false);
    if (testCalendarData.find((el) => el.id === obj.id)?.id) {
      testCalendarData.find((el) => el.id === obj.id).pressureS = obj.pressureS;
      testCalendarData.find((el) => el.id === obj.id).pressureD = obj.pressureD;
      testCalendarData.find((el) => el.id === obj.id).pulse = obj.pulse;
      testCalendarData.find((el) => el.id === obj.id).additionalDataOne =
        obj.additionalDataOne;
      testCalendarData.find((el) => el.id === obj.id).additionalDataTwo =
        obj.additionalDataTwo;
      testCalendarData.find((el) => el.id === obj.id).additionalDataThree =
        obj.additionalDataThree;
      testCalendarData.find((el) => el.id === obj.id).rangePreasure =
        obj.rangePreasure;
    } else {
      testCalendarData.push({ ...obj });
    }
    setAsyncStorageData();
    getAsyncStorageData();
    setCalendarData(testCalendarData);
  };
  const addSymptoms = async (obj: ISymptomsData[]) => {
    setModalWindowSymptoms(false);
    setAsyncStorageDataSymptoms();
    getAsyncStorageDataSymptoms();
    setSymptomsDataState(obj);
  }

  async function setAsyncStorageData() {
    try {
      await AsyncStorage.setItem("measure", JSON.stringify(testCalendarData));
      sendAllMeasurementsData(testCalendarData);
    } catch (error) {
      console.log(error);
    }
  };
  async function setAsyncStorageDataSymptoms() {
    try {
      await AsyncStorage.setItem("userSymptoms", JSON.stringify(userSymptomsData));
    } catch (error) {
      console.log(error);
    }
  }

  async function getAsyncStorageData() {
    try {
      let measurementsData = await AsyncStorage.getItem("measure");
      if (measurementsData !== null) {
        testCalendarData = JSON.parse(measurementsData);
        setCalendarData(testCalendarData);
      } else {
        console.log("you have no data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getAsyncStorageDataSymptoms() {
    try {
      let userSymptoms = await AsyncStorage.getItem("userSymptoms");
      if (userSymptoms !== null) {
        userSymptomsData = JSON.parse(userSymptoms);
        setSymptomsDataState(userSymptomsData);
      } else {
        console.log("you have no data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const alertFuncRemover = () => {
    Alert.alert("Общий сброс", "Точно хотите совершить общий сброс?", [
      { text: "Да", onPress: () => removeAllAsyncData() },
      { text: "Нет", onPress: () => console.log("сохранить") },
    ]);
  };
  async function removeAllAsyncData() {
    try {
      await AsyncStorage.removeItem("measure");
      await AsyncStorage.multiRemove(["gender", "age", "weight"]);
      await AsyncStorage.removeItem("userSymptoms");
      testCalendarData = [];
      userDataRegistration = [];
      userSymptomsData = [];
      setCalendarData([]);
      setEditMeasurements(startCalendarData);
      setSymptomsDataState([{date: "", symptoms: ""}]);
      setEditSymptomsDataState([{date: "", symptoms: ""}]);
      navigation.reset({
        index: 0,
        routes: [{name: "UserGender"}],
      });
    } catch (error) {
      console.log(error);
    }
  }

  const loadScene = () => {
    navigation.navigate("Notifications");
  };

  const rightSwipeMeasurements = (item: IMeasurement) => {
    return (
      <TouchableOpacity style={homeInfoStyles.trash} onPress={() => {
        testCalendarData = testCalendarData.filter((el) => el.id !== item.id);
        setCalendarData(testCalendarData);
        sendAllMeasurementsData(testCalendarData);
      }} activeOpacity={0.5}>
        <Animated.View>
          <Feather
            name="trash-2"
            size={24}
            color="white"
          />
        </Animated.View>
      </TouchableOpacity>
    )
  };

  const rightSwipeSymptoms = (item: ISymptomsData) => {
    return (
      <TouchableOpacity style={homeInfoStyles.trash} onPress={() => {
        userSymptomsData = userSymptomsData.filter((el) => el.date !== item.date);
        setSymptomsDataState(userSymptomsData);
      }} activeOpacity={0.5}>
        <Animated.View>
          <Feather
            name="trash-2"
            size={24}
            color="white"
          />
        </Animated.View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView>
      <Modal visible={modalWindowMeasurements}>
        <AntDesign
          name="closecircleo"
          size={25}
          color="black"
          style={measurementsStyles.antDesign}
          onPress={() => setModalWindowMeasurements(false)}
        />
        <Measurements
          editMeasurements={editMeasurements}
          dateProps={userDate}
          addMeasurements={addMeasurements}
        />
      </Modal>

      <Modal transparent visible={modalWindowSymptoms}>
      <AntDesign
          name="closecircleo"
          size={25}
          color="black"
          style={[measurementsStyles.antDesign, {top: "13%", right: 30}]}
          onPress={() => setModalWindowSymptoms(false)}
        />
        <Symptoms
        dateProps={userDate}
        addSymptoms={addSymptoms}
        editSymptomsDataState={editSymptomsDataState}
        />
      </Modal>

      <Pressable style={homeInfoStyles.bell}>
        <Feather
          name="trash-2"
          size={24}
          color="black"
          onPress={alertFuncRemover}
        />
        <Feather 
          name="bell"
          onPress={loadScene}
          size={24} 
          color="black" />
      </Pressable>

      <FlatList
        style={{ height: "90%" }}
        data={[""]}
        renderItem={() => (
          <View>
            <View style={{ marginTop: 20 }}>
              <Text style={homeInfoStyles.userInfoTitles}>Важное</Text>
              <View style={homeInfoStyles.userInfoContainer}>
                <Text style={[homeInfoStyles.userInfoText, { minHeight: 70 }]}>
                  Когда вы настроите уведомления здесь будет находится список
                  напоминаний на день об измерении давления и лекарствах
                </Text>
              </View>
            </View>

            <View>
              <Text style={homeInfoStyles.userInfoTitles}>Измерения</Text>
              <FlatList
                data={calendarData.filter((obj) => obj.date === userDate)}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Pressable
                      onPress={() => {
                        setEditMeasurements(() => testCalendarData.filter((obj) => obj.id === item.id)[0]);
                        setModalWindowMeasurements(true);
                      }}
                    >
                      <Swipeable renderRightActions={() => rightSwipeMeasurements(item)}>
                        <View style={homeInfoStyles.importantCard}>
                          <View style={homeInfoStyles.importantCardBlock}>
                            <View style={homeInfoStyles.importantCardBlock}>
                              <Text style={[homeInfoStyles.importantCardText, { marginRight: 8 }]}>
                                Давление
                              </Text>
                              <Text style={homeInfoStyles.importantCardMeasurements}>
                                {item.pressureS}
                              </Text>
                              <Text style={[homeInfoStyles.importantCardText, { marginHorizontal: 3 }]}>
                                |
                              </Text>
                              <Text style={homeInfoStyles.importantCardMeasurements}>
                                {item.pressureD}
                              </Text>
                            </View>
                            <View style={homeInfoStyles.importantCardBlock}>
                              <Text style={[homeInfoStyles.importantCardText, { marginRight: 8 }]}>
                                Пульс
                              </Text>
                              <Text style={homeInfoStyles.importantCardMeasurements}>
                                {item.pulse}
                              </Text>
                            </View>
                            <View style={homeInfoStyles.importantCardSideBlockTwo}>
                              <Text style={homeInfoStyles.importantCardMeasurements}>
                                {item.rangePreasure}
                              </Text>
                              <Text style={homeInfoStyles.importantCardText}>
                                {item.date}
                              </Text>
                            </View>
                          </View>

                          <View style={homeInfoStyles.importantCardSideBlock}>
                            <Text style={item.additionalDataOne === "" ? { display: "none" } : homeInfoStyles.importantCardAditionalInfo}>
                              {item.additionalDataOne}
                            </Text>
                            <Text style={item.additionalDataTwo === "" ? { display: "none" } : homeInfoStyles.importantCardAditionalInfo}>
                              {item.additionalDataTwo}
                            </Text>
                            <Text style={item.additionalDataThree === "" ? { display: "none" } : homeInfoStyles.importantCardAditionalInfo}>
                              {item.additionalDataThree}
                            </Text>
                          </View>
                        </View>
                      </Swipeable>
                    </Pressable>
                  </TouchableOpacity>
                )}
              />
              <Pressable onPress={() => {
                  setModalWindowMeasurements(true);
                  setEditMeasurements(startCalendarData);
                }}>
                <View style={homeInfoStyles.userInfoContainer}>
                  <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
                </View>
              </Pressable>
            </View>

            <View>
              <Text style={homeInfoStyles.userInfoTitles}>Симптомы</Text>
              <FlatList
              data={symptomsDataState.filter((el) => el.date === userDate)}
              renderItem={({item}) => (
                <TouchableOpacity style={{paddingBottom: 20}} onPress={() => {setEditSymptomsDataState([item]); setModalWindowSymptoms(true)}}>
                  <Swipeable renderRightActions={() => rightSwipeSymptoms(item)}>
                    <View style={symptomsStyles.cardBlock}>
                      <Text>{item.symptoms}</Text>
                    </View>
                  </Swipeable>
                </TouchableOpacity>
              )}
              />
              <Pressable style={
                symptomsDataState.filter((el) => el.date === userDate)[0] === undefined ? {display: "flex"} : {display: "none"}
                } onPress={() => {setModalWindowSymptoms(true); setEditSymptomsDataState([{date: "", symptoms: ""}])}}>
                <View style={homeInfoStyles.userInfoContainer}>
                  <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
                </View>
              </Pressable>
            </View>

            <View>
              <Text style={homeInfoStyles.userInfoTitles}>Лекарства</Text>
              <Pressable>
                <View style={homeInfoStyles.userInfoContainer}>
                  <Text style={homeInfoStyles.userInfoText}>Добавить +</Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};
