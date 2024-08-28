import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return <Drawer />;
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DrawerLayout />
    </GestureHandlerRootView>
  );
}
