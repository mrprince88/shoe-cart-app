import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { PAGE, RootStackParamList } from "app/types";
import HomeScreen from "app/pages/AdminHome";
import UserHome from "app/pages/UserHome";
import AddScreen from "app/pages/AddItem";
import Login from "app/pages/Login";
import UserCart from "app/pages/UserCart";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Group
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name={PAGE.LOGIN} component={Login} />
          <Stack.Screen name={PAGE.ADMIN_HOME} component={HomeScreen} />
          <Stack.Screen name={PAGE.USER_HOME} component={UserHome} />
          <Stack.Screen name={PAGE.USER_CART} component={UserCart} />
        </Stack.Group>

        <Stack.Screen
          name={PAGE.ADD}
          component={AddScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
