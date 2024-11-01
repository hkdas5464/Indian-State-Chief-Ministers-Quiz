// src/App.js
import React from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Quiz from "./Components/quiz";

import quizReducer from "./features/quizSlice";

import './App.css'

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="header">Indian State Chief Ministers Quiz</h1>
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;
