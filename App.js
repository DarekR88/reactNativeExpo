import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHnadler = (goal) => {
    setGoals((goalsList) => [...goalsList, {key: Math.random().toString(), value: goal}]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHnadler={addGoalHnadler} />
      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalList title={itemData.item.value}  />}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
