import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "./logo.png";
function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className='mt-16 flex-row items-center'>
      
      <View >
        <Image className="h-24 w-24" source={logo} />
      </View>
      <View className="text-red-600 flex-row">
        <Text>Deliver Now</Text>
        <Text>Current Loctaion</Text>
      </View>
      
    </View>
  );
}

export default Home;
