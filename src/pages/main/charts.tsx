import { dataChartsDate } from "data";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { globalStyles, radioBtn } from "styles";

export const Charts: React.FC = () => {
  const [userOption, setUserOption] = useState<string>("");

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
