import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { PAGE, LoginScreenNavigationProp } from "app/types";

export default function Login({ navigation }: LoginScreenNavigationProp) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shoe Cart System</Text>
      <Image
        source={require("app/assets/images/shopping-bag.png")}
        style={styles.image}
      />
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(PAGE.ADMIN_HOME)}
        >
          <Text>Login as Admin</Text>
        </Pressable>
        <Pressable
          style={styles.secondaryButtonContainer}
          onPress={() => navigation.navigate(PAGE.USER_HOME)}
        >
          <Text>Login as User</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
