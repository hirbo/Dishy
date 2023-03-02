import React, { useLayoutEffect } from 'react'
import { View ,Text} from 'react-native'
import { useNavigation } from 'react-router-dom'

function Home() {
const navigation = useNavigation
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })



  return (
    <View className='p-32'>
        <Text className='text-red-600'>homescreen</Text>
    </View>
  )
}

export default Home