// src/components/Score.js
import React from "react";
import { useSelector } from "react-redux";

const Score = ({ onRestart }) => {
  const { score, userAnswers } = useSelector((state) => state.quiz);
  
  // Calculate totals
  const totalQuestions = userAnswers.length;
  const totalCorrect = userAnswers.filter(answer => answer.isCorrect).length;
  const totalIncorrect = totalQuestions - totalCorrect;
  const result = (totalCorrect*2)-(totalIncorrect*.5)
  return (
    <div className="score-container">
      <h2>Your Score: {score}</h2>
      
      <div className="results-box">
        <h3 className="results-header">Quiz Results</h3>
        <div className="totals">
        <p><strong>Your Score is:{result}</strong></p>
          <p><strong>Total Correct: </strong>{totalCorrect}</p>
          <p><strong>Total Incorrect: </strong>{totalIncorrect}</p>
        </div>
    
        <div className="results">
          {userAnswers.map((answer, index) => (
            <div key={index} className={`result ${answer.isCorrect ? "correct" : "incorrect"}`}>
              <p><strong>Question:</strong> {answer.question}</p>
              <p><strong>Your Answer:</strong> {answer.selectedAnswer}</p>
              <p><strong>Correct Answer:</strong> {answer.correctAnswer}</p>
            </div>
          ))}
        </div>

        
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Score;
