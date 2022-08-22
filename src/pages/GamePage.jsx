import { View, Text } from "react-native";
import React from "react";
import { SmallRoundButton } from "../components/SmallRoundButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { HeaderApp } from "../components/HeaderApp";
import { LargeButton } from "../components/LargeButton";
import { GameQuestions } from "../Questions";
import { TestAnswerButton } from "../others/TestAnswerButton";
import { STARTING_BUTTON_COLOR } from "../Constants";

export const GamePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [buttonColors, setButtonColors] = useState(STARTING_BUTTON_COLOR);

  const [questionNumber, setQuestionNumber] = useState(0);

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
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
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
          {GameQuestions[questionNumber].text}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <LargeButton
          theme={theme}
          colorType={buttonColors[0]}
          pressFunction={() =>
            TestAnswerButton(questionNumber, 1, setButtonColors)
          }
          text={GameQuestions[questionNumber].answers[0].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[1]}
          pressFunction={() =>
            TestAnswerButton(questionNumber, 2, setButtonColors)
          }
          text={GameQuestions[questionNumber].answers[1].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[2]}
          pressFunction={() =>
            TestAnswerButton(questionNumber, 3, setButtonColors)
          }
          text={GameQuestions[questionNumber].answers[2].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[3]}
          pressFunction={() =>
            TestAnswerButton(questionNumber, 4, setButtonColors)
          }
          text={GameQuestions[questionNumber].answers[3].text}
        />
        <SmallRoundButton theme={theme} colorType="secondary" text="Suite" />
      </View>
    </View>
  );
};
