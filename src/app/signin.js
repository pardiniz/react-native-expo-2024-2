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
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#800000"
        />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#800000" />
        <TextInput
          style={styles.input}
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

      <View style={styles.buttonContainer}>
        <Button
          color="#800000"
          title="Entrar"
          onPress={handleEntrarSuper}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          color="#800000"
          title="Sobre"
          onPress={() => router.push("/about")} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color="#800000"
          title="Sair do aplicativo"
          onPress={() => BackHandler.exitApp()}
        />
      </View>

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
    gap: 20, // Aumentei o espaçamento entre os componentes
  },
  title: {
    fontFamily: "serif", // Fonte mais clássica
    fontSize: 28, // Tamanho de fonte maior
    color: "#800000", // Cor de texto rica
    marginBottom: 40, // Aumentei a margem inferior para dar mais destaque
    fontWeight: "bold", // Negrito para dar mais presença
  },
  inputbox: {
    flexDirection: "row",
    gap: 12, // Aumentei o espaço entre os ícones e o campo de entrada
    marginVertical: 12, // Aumentei a margem vertical para separar melhor os campos
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#800000", // Cor da borda
    paddingVertical: 8, // Adicionando um pouco de espaçamento para o campo de texto
    width: "100%", // Garantir que o campo de entrada ocupe toda a largura disponível
  },
  input: {
    flex: 1,
    fontFamily: "serif", // Fonte mais clássica
    fontSize: 18,
    color: "#800000",
    paddingVertical: 5, // Adicionando um pouco de espaçamento interno
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 12, // Adicionando espaçamento vertical para os botões
  },
});
