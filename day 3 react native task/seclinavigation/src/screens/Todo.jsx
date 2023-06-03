import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Task from "../components/task";
import uuid from 'react-native-uuid';
// import { Button } from "react-native-elements";


export default function Todo() {
  const [addText, setAddText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [tasks, setTasks] = useState([

    { id: "1", title: "task1", isChecked: false },
    { id: "2", title: "task2", isChecked: false },
    { id: "3", title: "task3", isChecked: false },
  ]);
  const deleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );
  
  const deleteAllFunc = ()=>{
    if( tasks.length === 0){
        Alert.alert("No Tasks", "no tasks found to delete")
    }else{
        Alert.alert("Confirmation", "Are you sure to delete all tasks?", [
            {
              text: "delete",
              onPress: () => {
                setTasks([])
            },
            },
            { text: "cancel" },
          ])
    }
  }
  const handleChange = useCallback((val) => {
    setAddText(val);
  }, []);

  const handleAdd = useCallback(() => {
    if (addText === "") {
      setErrorText("Please Enter Task Title");
    } else if (addText.length <= 3) {
      setErrorText("Task title must be more than 3 letters");
    } else {
      setErrorText("");
      Alert.alert("Confirmation", "Are you sure to add this task?", [
        {
          text: "add",
          onPress: () => {
            setTasks([ ...tasks,{
                id: uuid.v4(),
                title: addText,
                isChecked: false,
              },
            ]);
            setAddText("");
          },
        },
        { text: "cancel" },
      ]);
    }
  }, [tasks, addText]);

  const handleToggleCheck = useCallback((ID) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === ID) {
          return { ...task, isChecked: !task.isChecked };
        }
        return task;
      })
    );
  });

  const checkedTasks = useMemo(() => tasks.filter((task) => task.isChecked));

  return (
    // <ScrollView style={{ backgroundColor: "black" }}>
    <View style={{ backgroundColor: "black" ,flex:1}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <TextInput
          onChangeText={handleChange}
          value={addText}
          style={{
            borderBottomColor: "pink",
            borderBottomWidth: 3,
            width: 250,
            color: "white",
          }}
          error
        ></TextInput>
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            backgroundColor: "pink",
            borderRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ marginTop: 0, padding: 10 }}>Add</Text>
        </TouchableOpacity>
      </View>
      {errorText ? (
        <Text style={{ color: "red", textAlign: "center" }}>{errorText}</Text>
      ) : null}
      {/* <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          color: "white",
          fontSize: 20,
        }}
      >
        {checkedTasks.length} done of {tasks.length} tasks
      </Text> */}
      <FlatList
      data={tasks}
      renderItem={({item})=>
      <Task 
      key={item.id}
      task={item} 
      deleteTask={deleteTask}
      handleToggleCheck={handleToggleCheck}
      ></Task>   
    }
      keyExtractor={(data)=>data.id}
      ListEmptyComponent={<Text style={{color:"white",textAlign:"center",marginTop:50,fontWeight:"bold",fontSize:20}}>No Tasks</Text>}
      ListHeaderComponent={ <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          color: "white",
          fontSize: 20,
        }}
      >
        {checkedTasks.length} done of {tasks.length} tasks
      </Text>}
      >

      </FlatList>
      <Button title={"delete all"} color="red" onPress={deleteAllFunc}></Button>

      {/* {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          handleToggleCheck={handleToggleCheck}
        ></Task>
      ))} */}
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({});
