import React, { useState } from 'react';
import './index.css';

const questions = [
  {
    question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
    options: [
      { text: "3:1", correct: false },
      { text: "2.5:1", correct: false },
      { text: "4.5:1", correct: true },
      { text: "5:1", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    options: [
      { text: "Colorful Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false }
    ]
  },
  {
    question: "Which HTML element is used to define important text?",
    options: [
      { text: "<b>", correct: false },
      { text: "<strong>", correct: true },
      { text: "<em>", correct: false },
      { text: "<i>", correct: false }
    ]
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      { text: "<script src='script.js'>", correct: true },
      { text: "<script href='script.js'>", correct: false },
      { text: "<script name='script.js'>", correct: false },
      { text: "<script file='script.js'>", correct: false }
    ]
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: [
      { text: "color", correct: false },
      { text: "bg-color", correct: false },
      { text: "bgColor", correct: false },
      { text: "background-color", correct: true }
    ]
  },
  {
    question: "What does the 'alt' attribute in an <img> tag define?",
    options: [
      { text: "Image title", correct: false },
      { text: "Alternative text for the image", correct: true },
      { text: "Image source", correct: false },
      { text: "Image description", correct: false }
    ]
  },
  {
    question: "Which of these HTML tags is used to display a list of items?",
    options: [
      { text: "<ul>", correct: true },
      { text: "<li>", correct: false },
      { text: "<ol>", correct: false },
      { text: "<dl>", correct: false }
    ]
  },
  {
    question: "What does the CSS property 'font-size' control?",
    options: [
      { text: "Text color", correct: false },
      { text: "Text size", correct: true },
      { text: "Text weight", correct: false },
      { text: "Text style", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a valid HTML element?",
    options: [
      { text: "<table>", correct: false },
      { text: "<section>", correct: false },
      { text: "<div>", correct: false },
      { text: "<box>", correct: true }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<hyperlink>", correct: false }
    ]
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleStartQuiz = () => {
    setHasStarted(true);
  };

  const handleSelectAnswer = (option) => {
    if (!isSubmitted) {
      setSelectedAnswer(option);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      if (selectedAnswer.correct) {
        setScore(score + 1);
      }
      setIsSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-[#F4F6FA]'
      } flex flex-col items-center justify-start p-8`}
    >
      <header className="w-full flex justify-end items-center mb-6">
        <img
          src="/assets/sun.png"
          alt="Sun"
          className={`w-6 h-6 ${isDarkMode ? 'opacity-0' : 'opacity-100'} transition-opacity`}
        />
        <div
          onClick={toggleDarkMode}
          className="cursor-pointer bg-[#A729F5] relative inline-flex items-center h-8 rounded-full w-16 mx-4"
        >
          <span
            className={`${
              isDarkMode ? 'translate-x-8' : 'translate-x-1'
            } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
          />
        </div>
        <img
          src="/assets/moon.png"
          alt="Moon"
          className={`w-6 h-6 ${isDarkMode ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        />
      </header>

      {!quizCompleted ? (
        !hasStarted ? (
          <div className="flex w-full max-w-5xl items-center justify-between mt-10">
            <div className="w-1/2 text-left">
              <h1 className={`text-5xl font-normal ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Welcome to the
              </h1>
              <h2 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Frontend Quiz!
              </h2>
              <p className={`text-lg mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Pick a subject to get started.
              </p>
            </div>
            <div className="w-1/2 space-y-4 flex flex-col items-start mt-10">
              {["HTML", "CSS", "Javascript", "Accessibility"].map((subject) => (
                <button
                  key={subject}
                  onClick={handleStartQuiz}
                  className={`flex items-center w-120 px-6 py-4 rounded-lg shadow-md ${
                    isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full max-w-5xl items-center justify-between mt-10">
            <div className="w-1/2 text-left ml-8"> 
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {questions[currentQuestionIndex].question}
              </h2>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-4" style={{ width: '90%' }}>
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <ul className="list-none pl-0 space-y-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectAnswer(option)}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isSubmitted
                        ? option.correct
                          ? 'border-green-500' 
                          : selectedAnswer === option
                          ? 'border-red-500'  
                          : isDarkMode ? 'border-gray-700' : 'border-white'
                        : selectedAnswer === option
                        ? 'border-blue-500'  
                        : isDarkMode
                        ? 'border-gray-700' 
                        : 'border-white'
                    } ${isDarkMode ? 'bg-gray-700' : 'bg-white'} ${
                      selectedAnswer === option && !isSubmitted ? 'bg-blue-100' : ''
                    } ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                  >
                    {String.fromCharCode(65 + index)}. {option.text}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-start">
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer || isSubmitted}
                  className="px-6 py-3 bg-[#A729F5] text-white rounded-lg hover:bg-[#9224E0] disabled:opacity-50"
                >
                  Submit Answer
                </button>
              </div>

              {isSubmitted && currentQuestionIndex < questions.length - 1 && (
                <div className="mt-4 flex justify-start">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 bg-[#A729F5] text-white rounded-lg hover:bg-[#9224E0]"
                  >
                    Next Question
                  </button>
                </div>
              )}

              {currentQuestionIndex === questions.length - 1 && isSubmitted && (
                <div className={`mt-6 text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  You got {score} out of {questions.length} correct!
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        <div className={`mt-6 text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          You got {score} out of {questions.length} correct!
        </div>
      )}
    </div>
  );
}

export default App;
