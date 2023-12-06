import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import UserCartProvider from "app/context/provider/UserCartProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "app/navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <UserCartProvider>
        <View style={{ flex: 1 }}>
          <Navigator />
          <StatusBar style="auto" />
        </View>
      </UserCartProvider>
    </SafeAreaProvider>
  );
}
