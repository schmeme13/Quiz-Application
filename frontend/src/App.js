import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  // Function to fetch questions from backend
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/question/category/java');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Fetch questions on component mount
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Questions in Java Category</h1>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.questionTitle}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

