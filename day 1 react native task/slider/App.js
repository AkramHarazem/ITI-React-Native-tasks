// import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {v4 as uuid} from 'uuid'


export default function App() {
  const images =[
    require("./assets/images/1.jpg"),
    require("./assets/images/2.jpg"),
    require("./assets/images/3.jpg"),
    require("./assets/images/4.jpg"),
    // require("./assets/images/5.jpg"),
  ]
  return (
    <SafeAreaView style={styles.container}>
 <ScrollView horizontal showsHorizontalScrollIndicator={false} 
//  style={styles.container}
 >
  {images.map((image,inx)=><Image key={inx} source={image} style={styles.image} ></Image>
  )} 
 </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:(Platform.OS ==="android")?37:0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});
