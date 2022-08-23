import { getRandomInt } from "./Random";
import {
  MAX_NUMBER_QUESTIONS,
  STARTING_BUTTON_COLOR,
  MAX_GAME_QUESTIONS,
} from "../Constants";

export const NextButton = (
  numberOfQuestionDisplayed,
  setQuestionDisplayed,
  setNextButton,
  questionDisplayedList,
  setQuestionDisplayedList,
  questionNumber,
  setQuestionNumber,
  setButtonColors,
  navigation
) => {
  var newList = questionDisplayedList;
  if (newList.length + 1 === MAX_GAME_QUESTIONS) {
    navigation.navigate("End");
  } else {
    newList.push(questionNumber);
    setQuestionDisplayedList(newList);

    setButtonColors(STARTING_BUTTON_COLOR);
    setQuestionDisplayed(numberOfQuestionDisplayed + 1);
    setNextButton([true, 0]);
    var questionNotDisplayed = false;
    while (questionNotDisplayed === false) {
      let nextQuestionNumber = getRandomInt(MAX_NUMBER_QUESTIONS);
      if (!questionDisplayedList.includes(nextQuestionNumber)) {
        setQuestionNumber(nextQuestionNumber);
        questionNotDisplayed = true;
      }
    }
  }
};
