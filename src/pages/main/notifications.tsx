import React, {useState} from "react";
import { Text, View, SafeAreaView, Pressable, StatusBar, Modal } from "react-native";
import { measurementsStyles, homeInfoStyles } from "styles";
import { AntDesign } from "@expo/vector-icons";

export const notificationsData = [
  {
    id: '1',
    name: 'Измерить давление',
    interval: 'Ежедневно',
    time: '9.00'
  }
];



export const Notifications: React.FC = () => {
  const [modalWindow, setModalWindow] = useState<boolean>(true);

  return (
    <SafeAreaView style={[measurementsStyles.container, { marginTop: 22 }]}>

      <Modal visible={modalWindow} animationType="slide">
      <AntDesign
          name="closecircleo"
          size={25}
          color="black"
          onPress={() => setModalWindow(false)}
        />
      </Modal>


      <View>
        <Text style={homeInfoStyles.calendarTitle}>Напоминания</Text>

        <Pressable 
        style={{zIndex: 1, width: 50, height: 50, position: "absolute", bottom: 36, right: 10, backgroundColor: "#D9D9D9", borderRadius: 40}}>
          <Text style={{textAlign: "center", fontSize: 35}}>+</Text>
        </Pressable>

        <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <View style={{height: "95%", width: "60%", display: "flex", alignItems: "center", justifyContent: "center",}}>
            {notificationsData.length === 0 ? 
              <Text style={{textAlign: "center", color: '#979797'}}>У вас нет напоминаний, чтобы добавить новое нажмите на «+»</Text>
              : <View></View>
            }
          </View>
        </View>


      </View>
    </SafeAreaView>
  );
};
