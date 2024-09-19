// src/components/QuestionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent, TextField } from '@mui/material';

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
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={handleCategoryChange}
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained">Fetch Questions</Button>
      </form>
      {questions.map((question) => (
        <Card key={question.id} style={{ margin: '10px 0' }}>
          <CardContent>
            <Typography variant="h6">{question.questionTitle}</Typography>
            <Button component={Link} to={`/question/${question.id}`} variant="contained">View Details</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default QuestionList;
