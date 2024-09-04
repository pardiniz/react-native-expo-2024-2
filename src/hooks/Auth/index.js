import { createContext, useContext, useEffect, useState } from "react";
import { useUserDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Text, View } from "react-native";

const AuthContext = createContext({});

export const Role = {
  SUPER: "SUPER",
  ADM: "ADM",
  USER: "USER",
};

export function AuthProvider({ children }) {

  const [user, setUser] = useState({
    autenticated: null,
    user: null,
    role: null,
  });

  const { authUser } = useUserDatabase();

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await AsyncStorage.getItem("@payment:user");

      if (storagedUser) {
        setUser({
          autenticated: true, 
          user: JSON.parse(storagedUser),
          role: JSON.parse(storagedUser).role,
        });
    
      } else {
        setUser({
          autenticated: false,
          user: null,
          role: null,
        });
      }
    };

    loadStorageData();

  }, []);
  
useEffect(()=>{
  console.log("AuthProvider: ", user);
},[user])

  const signIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
   if (!response) {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error("Usuário ou senha invalidos");

      await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

    }

    if (email === "super@email.com" && password === "A123456a!") {
      setUser({
        autenticated: true,
        user: { id: 1, name: "Super Usuar", email },
        role: Role.SUPER,
      });
    } else if (email === "adm@email.com" && password === "A123456a!") {
      setUser({
        autenticated: true,
        user: { id: 2, name: "Administrador", email },
        role: Role.ADM,
      });
    } else if (email === "user@email.com" && password === "A123456a!") {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("@payment:user");
    setUser({});
  };

  

  if (user?.autenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 28, marginTop: 15 }}>
          Carregando Dados do Usuário
        </Text>
        <ActivityIndicator size="large" color="#0000" />
      </View>
    );
  }


  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
