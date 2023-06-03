import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import Routes from "../common/routes";

export default function Home({navigation}) {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        {
          id: "0",
          text: "User 1",
          imgSrc: require("../../assets/images/1.png"),
        },
        {
          id: "1",
          text: "User 2",
          imgSrc: require("../../assets/images/2.png"),
        },
        {
          id: "2",
          text: "User 3",
          imgSrc: require("../../assets/images/3.png"),
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "3",
          text: "User 1",
          imgSrc: require("../../assets/images/1.png"),
        },
        {
          id: "4",
          text: "User 2",
          imgSrc: require("../../assets/images/2.png"),
        },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        {
          id: "5",
          text: "User 1",
          imgSrc: require("../../assets/images/1.png"),
        },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        {
          id: "6",
          text: "User 1",
          imgSrc: require("../../assets/images/1.png"),
        },
      ],
    },
  ];
  return (
    <>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "darkgray", borderRadius: 10 }}>
            <Text style={styles.headerTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.imgSrc}
            ></Image>
            <Text>{item.text}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        //   renderSectionFooter={({section})=><Text style={styles.headerTitle}>{section.id}</Text>}
      ></SectionList>
      <Pressable style={styles.btn} onPress={()=>{navigation.navigate(Routes.todo)}}>
        <Text style={{textAlign:"center", fontSize:20,fontWeight:"bold"}}>Todo list</Text>
      </Pressable>
      {/* <Button title="Todo"></Button> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    marginLeft: 15,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
    marginLeft: 15,
  },
  image: {
    height: 40,
    width: 40,
  },
  btn:{

    backgroundColor:"gray",
     borderRadius:15,
     margin:20,
     padding:15,
     
  }
});
