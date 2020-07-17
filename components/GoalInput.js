import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGaol] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGaol(enteredText);
  };

    const onButtonPress = () => {
        setEnteredGaol("")
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        onPress={() => {
          props.addGoalHnadler(enteredGoal);
          onButtonPress()  
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
