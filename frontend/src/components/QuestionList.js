import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useState('');

    const fetchQuestions = async (category) => {
        try {
            const response = await axios.get(`http://localhost:8080/question/category/${category}`);
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions', error);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQuestions(category);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <input type="text" value={category} onChange={handleCategoryChange} />
                </label>
                <button type="submit">Fetch Questions</button>
            </form>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>{question.questionTitle}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;
