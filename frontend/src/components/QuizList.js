import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import CreateQuizForm from './CreateQuizForm';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Fetch all the quizzes from the backend
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/quiz/list'); // Assuming a `quiz/list` endpoint exists
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Quiz List
      </Typography>

      {/* List of available quizzes */}
      {quizzes.length > 0 ? (
        <List>
          {quizzes.map((quiz) => (
            <ListItem key={quiz.id} button component={Link} to={`/quiz/${quiz.id}`}>
              <ListItemText primary={quiz.title} secondary={`Category: ${quiz.category} | Questions: ${quiz.numQuestions}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No quizzes available yet.</Typography>
      )}

      {/* Create new quiz form */}
      <Typography variant="h5" sx={{ marginTop: '30px' }}>
        Create a New Quiz
      </Typography>
      <CreateQuizForm />
    </Box>
  );
};

export default QuizList;
