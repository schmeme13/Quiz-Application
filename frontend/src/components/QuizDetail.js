import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const QuizDetail = () => {
  const { id } = useParams(); // Get the quiz ID from the URL
  const [quiz, setQuiz] = useState(null);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/quiz/get/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleOptionChange = (questionId, answer) => {
    setResponses({ ...responses, [questionId]: answer });
  };

  const handleSubmit = async () => {
    try {
      const submission = Object.entries(responses).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        selectedOption: answer,
      }));

      const result = await axios.post(`http://localhost:8080/quiz/submit/${id}`, submission);
      alert(`You scored: ${result.data}`);
      navigate('/');
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  if (!quiz) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>{quiz.title}</Typography>
      {quiz.map((question, index) => (
        <Box key={index} sx={{ marginBottom: '20px' }}>
          <Typography variant="h6">{index + 1}. {question.questionTitle}</Typography>
          <RadioGroup value={responses[question.id] || ''} onChange={(e) => handleOptionChange(question.id, e.target.value)}>
            <FormControlLabel value="option1" control={<Radio />} label={question.option1} />
            <FormControlLabel value="option2" control={<Radio />} label={question.option2} />
            <FormControlLabel value="option3" control={<Radio />} label={question.option3} />
            <FormControlLabel value="option4" control={<Radio />} label={question.option4} />
          </RadioGroup>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Quiz
      </Button>
    </Box>
  );
};

export default QuizDetail;
