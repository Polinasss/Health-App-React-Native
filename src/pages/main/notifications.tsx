import React from "react";
import { Text, View } from "react-native";

export const Notifications: React.FC = () => {
  return (
    <View>
      <Text>Напоминания</Text>
      <Text>У вас нет напоминаний, чтобы добавить новое нажмите на «+»</Text>
    </View>
  );
};
