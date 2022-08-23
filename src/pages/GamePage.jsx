import { View, Text } from "react-native";
import { SmallRoundButton } from "../components/SmallRoundButton";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { HeaderApp } from "../components/HeaderApp";
import { LargeButton } from "../components/LargeButton";
import { GameQuestions } from "../Questions";
import { TestAnswerButton } from "../others/TestAnswerButton";
import { STARTING_BUTTON_COLOR, MAX_NUMBER_QUESTIONS } from "../Constants";
import { NextButton } from "../others/NextButton";
import { getRandomInt } from "../others/Random";

export const GamePage = () => {
  var firstQuestion = getRandomInt(MAX_NUMBER_QUESTIONS);
  const { theme, setTheme } = useContext(ThemeContext);
  const { userScore, setUserScore } = useContext(ScoreContext);
  const [buttonColors, setButtonColors] = useState(STARTING_BUTTON_COLOR);
  const [questionNumber, setQuestionNumber] = useState(firstQuestion);
  const [numberOfQuestionsAnswered, setQuestionAnswered] = useState(0);
  const [numberOfQuestionDisplayed, setQuestionDisplayed] = useState(1);
  const [nextButtonState, setNextButton] = useState([true, 0]);
  const [questionDisplayedList, setQuestionDisplayedList] = useState([]);

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
            TestAnswerButton(
              questionNumber,
              1,
              setButtonColors,
              setQuestionAnswered,
              numberOfQuestionsAnswered,
              numberOfQuestionDisplayed,
              userScore,
              setUserScore,
              setNextButton
            )
          }
          text={GameQuestions[questionNumber].answers[0].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[1]}
          pressFunction={() =>
            TestAnswerButton(
              questionNumber,
              2,
              setButtonColors,
              setQuestionAnswered,
              numberOfQuestionsAnswered,
              numberOfQuestionDisplayed,
              userScore,
              setUserScore,
              setNextButton
            )
          }
          text={GameQuestions[questionNumber].answers[1].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[2]}
          pressFunction={() =>
            TestAnswerButton(
              questionNumber,
              3,
              setButtonColors,
              setQuestionAnswered,
              numberOfQuestionsAnswered,
              numberOfQuestionDisplayed,
              userScore,
              setUserScore,
              setNextButton
            )
          }
          text={GameQuestions[questionNumber].answers[2].text}
        />
        <LargeButton
          theme={theme}
          colorType={buttonColors[3]}
          pressFunction={() =>
            TestAnswerButton(
              questionNumber,
              4,
              setButtonColors,
              setQuestionAnswered,
              numberOfQuestionsAnswered,
              numberOfQuestionDisplayed,
              userScore,
              setUserScore,
              setNextButton
            )
          }
          text={GameQuestions[questionNumber].answers[3].text}
        />
        <SmallRoundButton
          theme={theme}
          colorType="secondary"
          text="Suite"
          pressFunction={() =>
            NextButton(
              numberOfQuestionDisplayed,
              setQuestionDisplayed,
              setNextButton,
              questionDisplayedList,
              setQuestionDisplayedList,
              questionNumber,
              setQuestionNumber,
              setButtonColors
            )
          }
          state={nextButtonState}
        />
      </View>
    </View>
  );
};
