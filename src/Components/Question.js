// src/components/Question.js
import React from "react";

const Question = ({ question, onAnswer }) => (
  <div>
    <h2>{question.question}</h2>
    {question.options.map((option, index) => (
      <button key={index} onClick={() => onAnswer(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default Question;
