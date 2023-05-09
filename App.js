import React from 'react';
import "react-native-gesture-handler";
import AuthNavigation from './components/auth/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
