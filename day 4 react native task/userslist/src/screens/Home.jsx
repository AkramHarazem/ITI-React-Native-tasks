import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import {NativeBaseProvider, Text} from 'native-base'
import React, { useCallback, useEffect, useState } from "react";
import useAxios from "axios-hooks";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Routes from "../common/Routes";
import { Icon } from "native-base";

export default function Home() {
  const { navigate } = useNavigation();
  const [users,setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [word, setWord] = useState("");

 useEffect(()=>{
    axios.get(
      "https://jsonplaceholder.typicode.com/users"
      )
    .then((res)=>setUsers(res.data))
  },[])

  // const [{ data, loading, error }, refetch] = useAxios({
  //   url: "https://jsonplaceholder.typicode.com/users",
  // });


  // const getData = () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:3030/users", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setUsers(result))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  
  const handleChange = useCallback ((val) => {
    setWord(val);
  });

  useEffect(() => {
    setFilteredUsers(
      users?.filter((user) =>
        user.name.toLowerCase().includes(word.toLowerCase())
      )
    );
  }, [word, users]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  if (!users) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text  style={{fontSize:30,textAlign:"center",color:"gray"}}>Users List</Text>

      <TextInput onChangeText={handleChange} value={word}
      style={[styles.input, isFocused?styles.inputFocused:null]}
      placeholder="Search Users"
      onFocus={handleFocus}
      onBlur={handleBlur}
      ></TextInput>

      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.details}>
            <Text
              onPress={() => {
                navigate(Routes.profile, { user: item })
                setWord("")
            }}
              style={{fontWeight:"bold"}}
            >
                Details
            </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={
          <View style={{ backgroundColor: "lightgrey", height: 1.5 }}></View>
        }
      ></FlatList>
      {/* <Button title="Camera" onPress={()=>navigate("Card")}></Button> */}
     </View> 

  );
}

const styles = StyleSheet.create({
    text:{
       fontSize:20,
       marginVertical:10
    },
    details:{
        marginLeft: "auto",backgroundColor:"skyblue",paddingHorizontal:25,borderRadius:5,display: "flex",
        justifyContent: "center",alignItems: "center"
    },
    input:{
        borderRadius:7,borderWidth:1,marginVertical:20,height:40, paddingLeft: 10
    },
    inputFocused: {
        backgroundColor: 'lightblue',
      }
});
