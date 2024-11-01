// src/features/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import questions from "../Data/questions";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    userAnswers: [], // To store user's answers
  },
  reducers: {
    answerQuestion: (state, action) => {
      const question = state.questions[state.currentQuestionIndex];
      const isCorrect = question.answer === action.payload;
      
      // Update score if correct
      if (isCorrect) state.score += 1;

      // Store user's answer and correctness
      state.userAnswers.push({
        question: question.question,
        selectedAnswer: action.payload,
        correctAnswer: question.answer,
        isCorrect,
      });

      // Move to next question or finish quiz
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
    restartQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isFinished = false;
      state.userAnswers = []; // Reset user answers
    },
  },
});

export const { answerQuestion, restartQuiz } = quizSlice.actions;
export default quizSlice.reducer;
