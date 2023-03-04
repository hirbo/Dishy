import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import logo from "./logo.png";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function RestuarantCard({
  
  title='title',
  imgUrl,
  rating = 4.5,
  genre,
  adress = 'adress',
  short_description,
  dishes,
  longitude,
  latitude,
}) {
  const navigation = useNavigation();
  //jijkjsndjcnd
  //jijkjsndjcnd
  //jijkjsndjcnd
  return (
    <TouchableOpacity
      onPress={() => {
       navigation.navigate('Restuarant',{title,rating,adress})
      }}
    >
      <View className="p-2 items-center shadow-xl bg-slate-200 rounded-md m-2">
        <Image source={logo} className="h-36 w-36" />
        <View className="bg-white shadow-lg p-2 rounded-md w-full">
          <Text>{title}</Text>
          <View className="flex-row space-x-2 items-center  ">
            <AntDesign name="star" size={12} color="black" />
            <Text>{rating}</Text>
            <Text>Genre</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Entypo name="location-pin" size={16} color="black" />
            <Text>{adress}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestuarantCard;
