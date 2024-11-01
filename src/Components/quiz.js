// src/components/Quiz.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, restartQuiz } from "../features/quizSlice";
import Question from "./Question";
import Score from "./Score";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, isFinished, score } = useSelector((state) => state.quiz);

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(answer));
  };

  return (
    <div>
      {!isFinished ? (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} onRestart={() => dispatch(restartQuiz())} />
      )}
    </div>
  );
};

export default Quiz;
