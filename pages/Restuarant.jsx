import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

function Restuarant() {
  const route = useRoute();
  const {title,adress}=route.params;
 

  return (
    <View>
      <Text>{title}</Text>
      <Text>{adress}</Text>
      <Text></Text>
    </View>
  );
}

export default Restuarant;
