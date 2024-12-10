import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import BackIcon from '../../student-basic-components/student-icons-components/BackIcon';
import { initialQuestionsData } from '../../student-basic-components/MockStudentData';

function StudentTakingQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]); 
  const [errorQuestions, setErrorQuestions] = useState([]);  
  const modalRef = useRef(null); 

  const initialTimeLimit = 600; 
  const [timeLeft, setTimeLeft] = useState(initialTimeLimit);
  const [progress, setProgress] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleSelectionChange = (questionId, option, noOfAnswer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedSelections = { ...prevSelectedAnswers };

      if (!updatedSelections[questionId]) {
        updatedSelections[questionId] = [];
      }

      const selectedOptions = updatedSelections[questionId];
      const isSelected = selectedOptions.includes(option);

      if (!isSelected) {
        if (selectedOptions.length < noOfAnswer) {
          updatedSelections[questionId] = [...selectedOptions, option];
        } else {
          updatedSelections[questionId] = [...selectedOptions.slice(1), option];
        }
      }
      setAnsweredQuestions(Object.keys(updatedSelections).length);
      return updatedSelections;
    });
  };
  const handleShortAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedSelections = { ...prevSelectedAnswers, [questionId]: answer };
      setAnsweredQuestions(Object.keys(updatedSelections).length);
      return updatedSelections;
    });
  };

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    const progressPercentage = (answeredQuestions / initialQuestionsData.length) * 100;
    setProgress(progressPercentage);
  }, [answeredQuestions]);

  const handleSubmit = () => {
    const errors = [];
    const unansweredQuestions = [];
    const errorQuestions = [];  
  
    initialQuestionsData.forEach((question, index) => {
      const questionNumber = index + 1; 
      if (question.required === "true") {
        if (question.type === "short_answer" && !selectedAnswers[question.questionId]) {
          unansweredQuestions.push(questionNumber); 
          errorQuestions.push(question.questionId); 
        }
        if (
          (question.type === "multiple_choice" || question.type === "select_multiple") &&
          !selectedAnswers[question.questionId]?.length
        ) {
          unansweredQuestions.push(questionNumber);  
          errorQuestions.push(question.questionId); 
        } 
        if (question.type === "true_or_false" && !selectedAnswers[question.questionId]) {
          unansweredQuestions.push(questionNumber); 
          errorQuestions.push(question.questionId); 
        }
      }
    });
  
    if (unansweredQuestions.length > 0) {
      const questionNumbers = unansweredQuestions.join(", "); 
      const errorMessage = `Question(s) ${questionNumbers} are required and have not been answered.`;
      errors.push(errorMessage);
  
      setErrorMessages(errors);
      setErrorQuestions(errorQuestions);  
    } else {
      setErrorMessages([]); 
      setErrorQuestions([]); 
      alert("Quiz submitted successfully!");
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setErrorMessages([]);  
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render each question dynamically based on its type (based on initialQuestionData, you can use it as a guide)
  const renderQuestion = (question, idx) => {
    const questionNumber = idx + 1;
    switch (question.type) {
      case 'true_or_false':
      case 'multiple_choice':
      case 'select_multiple':
        const isError = errorQuestions.includes(question.questionId); 
        return (
          <div
            key={question.questionId}
            className={`border-2 p-4 sm:p-6 border-primary-3 rounded-xl min-w-56 md:w-full max-lg ${
              isError ? 'border-red-500' : 'border-primary-3'
            } flex flex-col space-y-4`}
          >
            <div className="text-lg sm:text-xl text-text-1 mb-2 sm:mb-4">
              Question {questionNumber}
            </div>
            <div className="text-sm sm:text-base text-text-1 mb-2 sm:mb-4">
              {question.question}
            </div>
            <div className="flex flex-col space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full border-2 border-primary-3 text-primary-3 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
                  onClick={() =>
                    handleSelectionChange(question.questionId, option, question.noOfAnswer)
                  }
                  style={{
                    borderColor: selectedAnswers[question.questionId]?.includes(option)
                      ? '#8A2EDF' 
                      : '#363657', 
                    color: selectedAnswers[question.questionId]?.includes(option)
                      ? '#8A2EDF'
                      : '#363657',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

        case 'short_answer':
          const isShortAnswerError = errorQuestions.includes(question.questionId); 
          return (
            <div
              key={question.questionId}
              className={`border-2 p-4 sm:p-6 rounded-xl ${
                isShortAnswerError ? 'border-red-500' : 'border-primary-3'
              } flex flex-col space-y-4`}
            >
              <div className="text-lg sm:text-xl text-text-1 mb-2 sm:mb-4">
                Question {questionNumber}
              </div>
              <div className="text-sm sm:text-base text-text-1 mb-2 sm:mb-4">
                {question.question}
              </div>
              <div>
                <input
                  className="w-full border-2 bg-primary-1 border-primary-3 text-text-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-secondary-1 focus:ring-2 text-sm sm:text-base"
                  placeholder="Type your answer here"
                  type="text"
                  onChange={(e) => handleShortAnswerChange(question.questionId, e.target.value)}
                />
              </div>
            </div>
          );
        
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-primary-1 text-text-1 font-lexend">
      <div className="flex-1 p-4 sm:p-6 md:p-8 ml-40 mt-16">  {/* Adjust margins here for side menu and header */}
        <div className="sticky top-0 z-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4 border-b-2 pb-4 pt-4 border-b-primary-3 bg-primary-1">
          <a className="self-start text-text-1 font-semibold flex items-center" href="#">
            <BackIcon /> Back
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
            <div className="text-sm sm:text-base text-text-2 text-center">
              WST - Quiz 1: HTML
            </div>
            <div className="max-w-full sm:w-[750px] bg-primary-3 h-1 rounded-full">
              <div
                className="bg-secondary-1 h-1 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm sm:text-base text-text-2">{formatTime(timeLeft)}</div>
          </div>
  
          <button
            className="bg-accent-1 hover:bg-accent-2 text-primary-1 px-6 py-2 rounded-full text-sm sm:text-base w-auto whitespace-nowrap font-medium"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        </div>
  
        {/* Error Message */}
        {errorMessages.length > 0 && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" />
            <div
              ref={modalRef} 
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 border-2 border-red-500 bg-primary-1 z-50 p-4 sm:p-6 w-[90%] sm:w-auto max-w-lg rounded-lg flex items-start space-x-2"
            >
              <AlertCircle className="text-red-500 w-5 h-5" />
              <p className="text-sm sm:text-base">{errorMessages}</p>
            </div>
          </>
        )}
        <div className="space-y-8 mx-4 sm:mx-12 lg:ml-56 lg:pr-60">
          {initialQuestionsData.map((question, index) => renderQuestion(question, index))}
        </div>
      </div>
    </div>
  );      
}

export default StudentTakingQuiz;
