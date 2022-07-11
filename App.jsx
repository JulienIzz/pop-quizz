import { HomePage } from "./src/pages/HomePage";
import { ThemePage } from "./src/pages/ThemePage";
import { HeaderApp } from "./src/HeaderApp";
import { useState } from "react";
import { Theme_Colorful } from "./src/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(Theme_Colorful);

  return (
    //   <HomePage theme={theme} setTheme={setTheme} />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HeaderApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
