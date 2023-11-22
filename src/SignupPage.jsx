import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const SignupPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Task");
    } catch (error) {
      console.error("Erro no cadastro:", error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};

export default SignupPage;
