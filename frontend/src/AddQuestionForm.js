import React, { useState } from 'react';
import axios from 'axios';

const AddQuestionForm = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/question/add', {
        questionTitle,
        option1,
        option2,
        option3,
        option4,
        rightAnswer,
        difficultyLevel,
        category
      });
      // Clear form fields
      setQuestionTitle('');
      setOption1('');
      setOption2('');
      setOption3('');
      setOption4('');
      setRightAnswer('');
      setDifficultyLevel('');
      setCategory('');
      alert('Question added successfully!');
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Error adding question.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Question</h2>
      <label>
        Question Title:
        <input type="text" value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)} required />
      </label>
      <label>
        Option 1:
        <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} required />
      </label>
      <label>
        Option 2:
        <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} required />
      </label>
      <label>
        Option 3:
        <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)} required />
      </label>
      <label>
        Option 4:
        <input type="text" value={option4} onChange={(e) => setOption4(e.target.value)} required />
      </label>
      <label>
        Right Answer:
        <input type="text" value={rightAnswer} onChange={(e) => setRightAnswer(e.target.value)} required />
      </label>
      <label>
        Difficulty Level:
        <input type="text" value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)} required />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestionForm;
