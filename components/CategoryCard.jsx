import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View,Text, Image } from 'react-native'
import logo from './logo.png'
function CategoryCard({imgUrl,Title}) {
  return (
    <TouchableOpacity >
      <View className='items-center'>
      <View>
        <Text className='font-semibold '>{Title}</Text>
       </View>
       <View>
          <Image className="h-20 w-32 " source={imgUrl} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard