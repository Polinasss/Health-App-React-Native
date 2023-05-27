import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/router/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
