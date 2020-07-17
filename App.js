import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHnadler = (goal) => {
    setGoals((goalsList) => [...goalsList, {id: Math.random().toString(), value: goal}]);
  };

  const removeGoalHndler = goalId => {
    setGoals(goalsList => {
      return goalsList.filter((goal) => goal.id !== goalId);
    }

    )
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHnadler={addGoalHnadler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalList id={itemData.item.id} onDelete={removeGoalHndler} title={itemData.item.value}  />}
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
