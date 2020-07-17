import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalList = props => {
    return (
      <View style={styles.goals}>
        <Text>{props.title}</Text>
      </View>
    );
}

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