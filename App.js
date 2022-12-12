import React from "react";
import HomeScreen from "./app/Screens/HomeScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./app/Screens/RegisterScreen";
import User from "./app/Repo/User";
import SavedScreen from "./app/Screens/SavedScreen";
import AddDrinkScreen from "./app/Screens/AddDrinkScreen";
import { NativeBaseProvider } from "native-base";

export default function App() {

  const Stack = createNativeStackNavigator();
  User();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Saved" component={SavedScreen} />
          <Stack.Screen name="Add" component={AddDrinkScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
