import React, { useState, useEffect } from 'react';
import './App.css';
import AddQuestionForm from './AddQuestionForm';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);

  // Fetch questions by category (e.g., Java) when the component loads
  useEffect(() => {
    axios.get('http://localhost:8080/question/category/java')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Java Questions</h1>
        
        {/* Display the list of questions */}
        <div className="question-list">
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div key={index} className="question-item">
                <p><strong>Question:</strong> {question.questionTitle}</p>
                <p><strong>Options:</strong> {question.option1}, {question.option2}, {question.option3}, {question.option4}</p>
                <p><strong>Right Answer:</strong> {question.rightAnswer}</p>
                <p><strong>Difficulty:</strong> {question.difficultyLevel}</p>
                <p><strong>Category:</strong> {question.category}</p>
              </div>
            ))
          ) : (
            <p>No questions found for this category.</p>
          )}
        </div>

        {/* Form to add new questions */}
        <AddQuestionForm />
      </header>
    </div>
  );
}

export default App;

