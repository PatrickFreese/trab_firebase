import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../firebase/src/LoginPage";
import SignupPage from "../firebase/src/SignupPage";
import NewTask from "./src/NewTask";
import Details from "./src/Datails";
import Task from "./src/Task";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ title: "Login" }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{ title: "Cadastro de usuário" }}
          name="Signup"
          component={SignupPage}
        />
        <Stack.Screen
          options={{ title: "Lista de tarefas" }}
          name="Task"
          component={Task}
        />
        <Stack.Screen
          options={{ title: "Adicionar nova tarefa" }}
          name="NewTask"
          component={NewTask}
        />
        <Stack.Screen
          options={{ title: "Editar tarefa" }}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
