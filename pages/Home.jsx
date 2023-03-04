import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "./logo.png";
import Categories from "./Categories";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FeaturedRow from "../components/FeaturedRow";
function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View>
      <View className="mt-14 flex-row items-center bg-white">
        <View>
          <Image className="h-20 w-20 " source={logo} />
        </View>
        <View className="text-red-600  flex-1">
          <Text className=" font-bold text-sm text-red-600">Deliver Now</Text>
          <Text className=" font-bold text-lg  text-slate-600">
            Current Loctaion{" "}
            <AntDesign name="downcircleo" size={24} color="red" />
          </Text>
        </View>
        <View className="mr-2">
          <FontAwesome name="user-circle-o" size={32} color="orange" />
        </View>
      </View>
      <View className="flex-row space-x-3 items-center mt-4 justify-center">
        <View className="flex-row ml-3 p-2 rounded-md space-x-2  bg-slate-300 ">
          <FontAwesome name="search" size={24} color="red" />
          <TextInput placeholder="search" className="w-[80%]"></TextInput>
        </View>
        <AntDesign name="barchart" size={24} color="orange" />
      </View>
      <ScrollView>
        <Categories />
        <FeaturedRow
          id="1"
          Title="favourite offers"
          description="nice hotel and quality food"
        />
      </ScrollView>
    </View>
  );
}

export default Home;
