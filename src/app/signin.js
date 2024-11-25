import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../hooks/Auth";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Senha ou usuário incorretos");
      console.log(error);  // Aqui você pode tentar melhorar o erro exibido para o usuário
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Majestade</Text>

      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#800000" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#800000"
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#800000" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisibility}
          placeholderTextColor="#800000"
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="#800000"
          onPress={togglePasswordVisibility}
        />
      </View>

      <Button
        color="#800000"
        title="Entrar"
        onPress={handleEntrarSuper}
      />
      <Button title="Sobre" 
        color="#800000"
        onPress={() => router.push("/about")} />
      <Button
        title="Sair do aplicativo"
        color="#800000"
        onPress={() => BackHandler.exitApp()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Fundo branco
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  title: {
    fontFamily: "serif", // Fonte mais clássica
    fontSize: 24,
    color: "#800000", // Cor de texto rica
    marginBottom: 20,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#800000", // Cor da borda
  },
  emailinput: {
    flex: 1,
    fontFamily: "serif", // Fonte mais clássica
    fontSize: 18,
    color: "#800000",
  },
  button: {
    width: "100%",
  },
});

