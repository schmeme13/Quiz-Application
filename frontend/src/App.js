import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import AddQuestionForm from './components/AddQuestionForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Fetch Questions by Category</Link>
            </li>
            <li>
              <Link to="/add-question">Add New Question</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/add-question" element={<AddQuestionForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
