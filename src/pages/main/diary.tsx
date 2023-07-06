import React, {useState} from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import { radioBtn } from "styles";
import { dataChartsDate } from "data";

export const Diary: React.FC = () => {
  const [userOption, setUserOption] = useState<string>("");
  
  return (
    <SafeAreaView style={{marginTop: 50}}>
        <Text>Дневник</Text>
        <View style={radioBtn.container}>
        {dataChartsDate.map((item) => {
          return (
            <Pressable
              key={item.id}
              onPress={() => setUserOption(item.value)}
              style={[ 
                item.value === userOption ? radioBtn.selected : radioBtn.unselected,
              ]}
            >
              <Text>{item.value}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
