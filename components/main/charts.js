import React from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";

import { dataChartsDate } from "../../data/data";

import { globalStyles, radioBtn } from "../../styles/style";

export const Charts = () => {
  const [userOption, setUserOption] = useState(null);

  return (
    <View>
      <Text style={globalStyles.text}>Графики</Text>
      <View style={radioBtn.container}>
        {dataChartsDate.map((item) => {
          return (
            <Pressable
              style={
                item.value === userOption
                  ? radioBtn.selected
                  : radioBtn.unselected
              }
              key={item.id}
              onPress={() => setUserOption(item.value)}
            >
              <Text>{item.value}</Text>
            </Pressable>
          );
        })}
      </View>
      <View></View>
    </View>
  );
};
