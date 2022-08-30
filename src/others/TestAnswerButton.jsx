import { GameQuestions } from "../Questions";

const changeButtonColor = (
  buttonColors,
  setButtonColors,
  buttonNumber,
  colorToSet
) => {
  buttonColors[buttonNumber - 1] = colorToSet;
  setButtonColors(buttonColors);
};

export const TestAnswerButton = (
  questionNumber,
  buttonNumber,
  setButtonColors,
  setQuestionAnswered,
  numberOfQuestionsAnswered,
  numberOfQuestionDisplayed,
  userScore,
  setUserScore,
  setNextButton
) => {
  if (numberOfQuestionDisplayed !== numberOfQuestionsAnswered) {
    setNextButton([false, 1]);
    setQuestionAnswered(numberOfQuestionsAnswered + 1);
    var actualButtonColors = ["grey", "grey", "grey", "grey"];
    changeButtonColor(
      actualButtonColors,
      setButtonColors,
      GameQuestions[questionNumber].answerNumber,
      "win"
    );
    if (GameQuestions[questionNumber].answerNumber !== buttonNumber) {
      changeButtonColor(
        actualButtonColors,
        setButtonColors,
        buttonNumber,
        "lose"
      );
    } else {
      setUserScore(userScore + 1);
    }
  }
};
