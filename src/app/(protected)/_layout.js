import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Button, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../hooks/Auth/index";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 28 }}>
        <Image
          source={{
            uri: "https://www.github.com/pardiniz.png",
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            margin: 19,
            alignSelf: "center",
          }}
        />
        <Text
          style={{ textAlign: "center", fontSize: 30, fontFamily: "regular" }}
        >
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={() => signOut()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            padding: 10,
            backgroundColor: "#800000",
            borderRadius: 90,
          }}
        >
          <Text style={{ color: "white", fontFamily: "bold" }}>Sair</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Reino Moderno da Inglaterra",
            headerTitle: "Reino Moderno da Inglaterra",
            drawerIcon: () => (
              <FontAwesome6 name="crown" size={20} color="black" />
            ),
          }}
        />
         <Drawer.Screen
          name="suec"
          options={{
            drawerLabel: "Reino Moderno da Suécia",
            headerTitle: "Reino Moderno da Suécia",
            drawerIcon: () => (
              <FontAwesome6 name="crown" size={20} color="black" />
            ),
          }}
        />
         <Drawer.Screen
          name="belg"
          options={{
            drawerLabel: "Reino Moderno da Bélgica",
            headerTitle: "Reino Moderno da Bélgica",
            drawerIcon: () => (
              <FontAwesome6 name="crown" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="coro"
          options={{
            drawerLabel: "Coroas e Séries",
            headerTitle: "Coroas e Séries",
            drawerIcon: () => (
              <FontAwesome6 name="crown" size={20} color="black" />
            ),
          }}
        />
         <Drawer.Screen
          name="more"
          options={{
            drawerLabel: "Extra Maria Antonieta",
            headerTitle: "Extra Maria Antonieta",
            drawerIcon: () => (
              <FontAwesome6 name="crown" size={20} color="black" />
            ),
          }}
        />
        

  
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}
