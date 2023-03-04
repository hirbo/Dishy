import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Restuarant from './pages/Restuarant';

const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <TailwindProvider>
    <Stack.Navigator>
      
         <Stack.Screen  name='Home' component={Home}/>
         <Stack.Screen  name='Restuarant' component={Restuarant}/>
      
    </Stack.Navigator>
    </TailwindProvider>
   
   
    </NavigationContainer>
  );
}
