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
    } else {
      setQuizCompleted(true); 
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F4F6FA] text-gray-800'} flex flex-col items-center justify-center p-8`}>
      <header className="w-full flex justify-end items-center p-4">
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
            className={`${isDarkMode ? 'translate-x-8' : 'translate-x-1'} inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
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
          <div className="flex w-full max-w-5xl items-center justify-between mt-20">
            <div className="text-left max-w-md">
              <h1 className="text-5xl font-normal">Welcome to the</h1>
              <h2 className="text-5xl font-bold">Frontend Quiz!</h2>
              <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">Pick a subject to get started.</p>
            </div>
            <div className="space-y-4">
              {["HTML", "CSS", "Javascript", "Accessibility"].map((subject) => (
                <button
                  key={subject}
                  onClick={handleStartQuiz}
                  className="flex items-center w-80 px-6 py-4 bg-white text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <span className="mr-4 text-xl">📜</span>
                  {subject}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full max-w-5xl items-center justify-between mt-20">
            <div className="w-1/2 text-left">
              <h2 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>
            </div>

            <div className="w-1/2 space-y-4">
              <ul className="list-disc pl-5">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectAnswer(option)}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isSubmitted ? (
                        option.correct ? 'border-green-500 bg-green-100' :
                        (selectedAnswer === option ? 'border-red-500 bg-red-100' : 'border-gray-300')
                      ) : (
                        selectedAnswer === option ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                      )
                    }`}
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
                <div className="mt-6 text-lg">
                  You got {score} out of {questions.length} correct!
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="mt-6 text-lg">You got {score} out of {questions.length} correct!</div>
      )}
    </div>
  );
  
}

export default App;
