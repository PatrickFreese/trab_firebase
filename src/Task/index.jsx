import { onValue, ref, remove, update } from "firebase/database";
import React, { useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { db } from "../firebaseConnection";
import styles from "./style";

export default function Task({ navigation }) {
  const [task, setTask] = useState({});
  const keys = useMemo(() => Object.keys(task), [task]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const deleteTask = (key) => {
    remove(ref(db, "/Tasks/" + key));
  };

  const loadTasks = () => {
    onValue(ref(db, "/Tasks"), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      setTask({ ...data });
    });
  };

  const finishTask = (key, description) => {
    update(ref(db, "/Tasks/" + key), {
      description: description,
      status: true,
    });
  };

  useEffect(() => {
    if (isFirstRender) {
      loadTasks();
      setIsFirstRender(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {keys.length > 0 &&
        keys.map((key) => (
          <View key={key} style={styles.Tasks}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  description: task[key].description,
                  key: key,
                  status: task[key].status,
                })
              }
            >
              <Text numberOfLines={1} style={styles.DescriptionTask} key={key}>
                {task[key].description}
              </Text>
            </TouchableOpacity>
            <View style={styles.ContainerStatus}>
              {!task[key].status && (
                <TouchableOpacity
                  style={styles.FinishTask}
                  onPress={() => finishTask(key, task[key].description)}
                >
                  <Text style={styles.FinishTaskText}>Concluir</Text>
                </TouchableOpacity>
              )}

              {task[key].status && <Text key={key}>Concluido</Text>}

              
                
              
            </View>
          </View>
        ))}

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
