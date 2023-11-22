import { push, ref } from "firebase/database";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../firebaseConnection";
import styles from "./style";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState(null);

  function addTask() {
    push(ref(db, "Tasks"), {
      description: description,
      status: false,
    });
    navigation.navigate("Task");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição da tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa:"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}
      >
        <Text style={styles.icontButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
