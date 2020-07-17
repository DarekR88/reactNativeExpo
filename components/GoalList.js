import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalList = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.goals}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goals: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalList;
