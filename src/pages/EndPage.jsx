import { View, Text } from "react-native";
import React from "react";
import { MediumButton } from "../components/MediumButton";
import { HeaderApp } from "../components/HeaderApp";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { ScoreContext } from "../contexts/ScoreContext";

export const EndPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { userScore, setUserScore } = useContext(ScoreContext);
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
          height: "50%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            width: "90%",
          }}
        >
          TON SCORE S'ELEVE AU TOTAL FARAMINEUX DE
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 60,
            textAlign: "center",
            width: "90%",
            margin: 25,
          }}
        >
          {userScore}
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            width: "90%",
          }}
        >
          BRAVO MON COCHON !
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MediumButton
          theme={theme}
          colorType="primary"
          text="ACCUEIL"
          pressFunction={() => {
            navigation.navigate("Home");
            setUserScore(0);
          }}
        />
      </View>
    </View>
  );
};
