import React, { useState } from 'react';
import axios from 'axios';

const AddQuestionForm = () => {
    const [questionData, setQuestionData] = useState({
        questionTitle: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        rightAnswer: '',
        difficultyLevel: '',
        category: ''
    });

    const handleChange = (e) => {
        setQuestionData({
            ...questionData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/question', questionData);
            alert('Question added successfully');
        } catch (error) {
            console.error('Error adding question', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="questionTitle" placeholder="Question Title" value={questionData.questionTitle} onChange={handleChange} />
            <input name="option1" placeholder="Option 1" value={questionData.option1} onChange={handleChange} />
            <input name="option2" placeholder="Option 2" value={questionData.option2} onChange={handleChange} />
            <input name="option3" placeholder="Option 3" value={questionData.option3} onChange={handleChange} />
            <input name="option4" placeholder="Option 4" value={questionData.option4} onChange={handleChange} />
            <input name="rightAnswer" placeholder="Right Answer" value={questionData.rightAnswer} onChange={handleChange} />
            <input name="difficultyLevel" placeholder="Difficulty Level" value={questionData.difficultyLevel} onChange={handleChange} />
            <input name="category" placeholder="Category" value={questionData.category} onChange={handleChange} />
            <button type="submit">Add Question</button>
        </form>
    );
};

export default AddQuestionForm;
