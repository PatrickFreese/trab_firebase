import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../NewTask/style";
import { db } from "../firebaseConnection";
import { ref, update } from "firebase/database";
import { useEffect } from "react";

export default function Details({ navigation, route }) {
  const [description, setDescription] = useState();

  function editTask() {
    update(ref(db, "/Tasks/" + route.params.key), {
      description: description,
      status: route.params.status,
    });
    navigation.navigate("Task");
  }

  useEffect(() => {
    if (route.params) {
      setDescription(route.params.description);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        onChangeText={(value) => setDescription(value)}
        value={description}
      />
      <TouchableOpacity style={styles.buttonTask} onPress={editTask}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
