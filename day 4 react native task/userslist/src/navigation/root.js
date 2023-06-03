import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Routes from '../common/Routes'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Card from '../screens/Card'


const Stack = createNativeStackNavigator()
export default function Root() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}
    >
        <Stack.Screen
        name={Routes.home}
        component={Home}
        options={{
            headerTitle:"Home Screen",
            headerStyle:{backgroundColor:"skyblue"},
            headerTitleStyle:{fontSize:25,color:"white"},
            headerTitleAlign:"left",        
        }}
        >
        </Stack.Screen>

        <Stack.Screen
        name={Routes.profile}
        component={Profile}
        options={{
            // headerTitle:"Home Screen",
            headerStyle:{backgroundColor:"skyblue"},
            headerTitleStyle:{fontSize:25,color:"white"},
            headerTitleAlign:"left",        
        }}
        >
        </Stack.Screen>
        {/* <Stack.Screen name="Card" component={Card}></Stack.Screen> */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})