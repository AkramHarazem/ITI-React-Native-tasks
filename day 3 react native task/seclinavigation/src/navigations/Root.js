import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Routes from '../common/routes'
import Todo from '../screens/Todo'

const Stack = createNativeStackNavigator()
export default function Root() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={Routes.home} 
        component={Home}
        options={{
            headerTitle:"User List",
            headerTintColor:"gray",
            headerStyle:{backgroundColor:"lightgray"},
            headerTitleStyle:{fontSize:25}
        }}
        />
        <Stack.Screen
         name={Routes.todo} 
         component={Todo}
         options={{
         headerTitle:"My Todo List",
         headerStyle:{backgroundColor:"pink"},
         headerTitleStyle:{fontSize:25,color:"white"},
         headerTitleAlign:"center",

         }}
         />
    </Stack.Navigator>
  )
}