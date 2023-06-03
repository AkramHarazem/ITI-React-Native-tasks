import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
// import {CheckBox} from '@react-native-community/checkbox'
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

export default function Task({ task, deleteTask, handleToggleCheck }) {
  const [isChecked, setCheck] = useState(task.isChecked);
  const handleChange = () => {
    setCheck(!isChecked);
    handleToggleCheck(task.id);
  };
  const handledelete = () => {
    Alert.alert("Confirmation", "Are you sure to delete this task?", [
      {
        text: "delete",
        onPress: () => {
          deleteTask(task.id);
        },
      },
      { text: "cancel" },
    ]);
  };
  return (
    <View style={{ backgroundColor: "black" }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "gray",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginHorizontal: 35,
          marginVertical: 10,
          borderRadius: 40,
        }}
      >
        <Text
          style={[
            styles.taskText,
            isChecked && { textDecorationLine: "line-through" },
          ]}
        >
          {task.title}
        </Text>
        <CheckBox
          style={{ backgroundColor: "white", borderWidth: 0 }}
          title={"Done"}
          checked={isChecked}
          onPress={handleChange}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          textStyle={{ color: "black", fontSize: 15 }}
          checkedColor={"pink"}
          uncheckedColor={"pink"}
        />
        <Pressable
          onPress={handledelete}
          style={({ pressed }) => ({ opacity: pressed ? 0.1 : 1 })}
        >
          <Text style={{ fontWeight: "bold" }}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskText: {
    fontWeight: "bold",
  },
});
