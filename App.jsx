import { HomePage } from "./src/pages/HomePage";
import { ThemePage } from "./src/pages/ThemePage";
import { GamePage } from "./src/pages/GamePage";
import { EndPage } from "./src/pages/EndPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContextComp } from "./src/contexts/ThemeContext";
import { ScoreContextComp } from "./src/contexts/ScoreContext";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./src/contexts/ThemeContext";
import { HeaderApp } from "./src/components/HeaderApp";
import React from "react";

const Stack = createNativeStackNavigator();

const ThemeBackgroundWrapper = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {children}
    </View>
  );
};

export default function App() {
  return (
    <ThemeContextComp>
      <ThemeBackgroundWrapper>
        <ScoreContextComp>
          <StatusBar style="light" />
          <HeaderApp />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ animation: "fade" }}
              />
              <Stack.Screen
                name="Themes"
                component={ThemePage}
                options={{ animation: "fade" }}
              />
              <Stack.Screen
                name="Game"
                component={GamePage}
                options={{ animation: "fade" }}
              />
              <Stack.Screen
                name="End"
                component={EndPage}
                options={{ animation: "fade" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ScoreContextComp>
      </ThemeBackgroundWrapper>
    </ThemeContextComp>
  );
}
