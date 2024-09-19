// src/components/QuestionDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const QuestionDetail = () => {
  const { questionId } = useParams(); // Retrieve the questionId from the URL
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/question/${questionId}`);
        setQuestion(response.data);
      } catch (error) {
        console.error('Error fetching question details', error);
      }
    };

    fetchQuestion();
  }, [questionId]);

  if (!question) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4">{question.questionTitle}</Typography>
      <Typography variant="h6">Options:</Typography>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
    </Box>
  );
};

export default QuestionDetail;
