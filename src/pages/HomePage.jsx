import { View } from "react-native";
import { MediumButton } from "../MediumButton";
import { HeaderApp } from "../HeaderApp";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useNavigation } from "@react-navigation/native";

export const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <HeaderApp theme={theme} setTheme={setTheme}></HeaderApp>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MediumButton theme={theme} colorType="primary" text="JOUER" />
        <MediumButton
          theme={theme}
          colorType="secondary"
          text="PARAMÈTRES"
          pressFunction={() => navigation.navigate("Themes")}
        />
        <MediumButton theme={theme} colorType="tertiary" text="AIDE" />
      </View>
    </View>
  );
};
