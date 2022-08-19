import { View } from "react-native";
import { MediumButton } from "../components/MediumButton";
import { HeaderApp } from "../components/HeaderApp";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { ModaleAide } from "../others/ModaleAide";

export const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <HeaderApp />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MediumButton
          theme={theme}
          colorType="primary"
          text="JOUER"
          pressFunction={() => navigation.navigate("Game")}
        />
        <MediumButton
          theme={theme}
          colorType="secondary"
          text="THEMES"
          pressFunction={() => navigation.navigate("Themes")}
        />
        <MediumButton
          theme={theme}
          colorType="tertiary"
          text="AIDE"
          pressFunction={() => setModalVisible(!modalVisible)}
        />
      </View>

      <ModaleAide
        theme={theme}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></ModaleAide>
    </View>
  );
};
