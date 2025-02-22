import React, { useState } from 'react';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
          className={`w-6 h-6  ${isDarkMode ? 'opacity-0' : 'opacity-100'} transition-opacity`}
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
          className={`w-6 h-6  ${isDarkMode ? 'opacity-100' : 'opacity-0'} transition-opacity`}
         
        />
      </header>
      <div className={`text-left mr-240 mt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'} ml-4`}>
        <h1 className="text-6xl font-normal">Welcome to the</h1>
        <h2 className="text-6xl font-bold">Frontend Quiz!</h2>
        <p className="text-lg">Pick a subject to get started.</p>
      </div>
    </div>
  );
}

export default App;
