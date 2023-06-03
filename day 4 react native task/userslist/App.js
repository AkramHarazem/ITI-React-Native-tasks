import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Root from './src/navigation/root';
// import { IconComponentProvider } from '@react-native-material/core';
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import  NativeBaseProvide  from "native-base";

export default function App() {
  return (
    // <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    // <NativeBaseProvider>
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
    // </NativeBaseProvide>
    // </IconComponentProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
