import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestuarantCard from "./RestuarantCard";
function FeaturedRow({ Title, description, id }) {
  return (
   <View>
     <View className='flex-row  justify-between items-center mt-4 ml-2'>
      <View>
        <Text className='text-lg font-bold text-gray-900'>{Title}</Text>
        <Text  className='text-gray-600'>{description}</Text>
      </View>
      <View className='mr-7'>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="black" />
      </View>
      
    </View>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{
      padding:4
    }} 
    >
      <RestuarantCard />
      
     

    </ScrollView>
   
   </View>
  );
}

export default FeaturedRow;
