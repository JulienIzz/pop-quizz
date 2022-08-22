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
  setButtonColors
) => {
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
  }
};
