import { useState } from 'react'
import quizData from './quiz'
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerClick = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      {currentQuestion < quizData.length ? (
        <div>
          <h3 className="question">Question {currentQuestion + 1}:</h3>
          <p className="question">{quizData[currentQuestion].question}</p>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3 className="result-message">Quiz Completed!</h3>
          <p className="result-message">Correct Answers: {calculateScore()} out of {quizData.length}</p>
        </div>
      )}
    </div>
  );
}

export default App
