import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent, MenuItem, TextField, Grid } from '@mui/material';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    // Fetch all questions on initial load
    const fetchAllQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/question/allQuestions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching all questions', error);
      }
    };

    fetchAllQuestions();
  }, []);

  const fetchQuestionsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:8080/question/category/${category}`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions by category', error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFilterToggle = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuestionsByCategory(category);
  };

  const handleReset = async () => {
    // Fetch all questions again
    try {
      const response = await axios.get('http://localhost:8080/question/allQuestions');
      setQuestions(response.data);
      setCategory(''); // Clear the category selection
    } catch (error) {
      console.error('Error resetting questions', error);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleFilterToggle}>
        {filterVisible ? 'Hide Filter' : 'Filter Questions'}
      </Button>

      {filterVisible && (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
          <TextField
            select
            label="Category"
            variant="outlined"
            value={category}
            onChange={handleCategoryChange}
            style={{ 
              marginRight: '10px',
              width: '200px',
              height: '36px'
            }}
            InputProps={{
              style: {
                height: '36px',
                textAlign: 'left'
              }
            }}
          >
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="python">Python</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" style={{ marginRight: '10px' }}>
            Apply Filter
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </form>
      )}

      {questions.map((question) => (
        <Card key={question.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <CardContent>
            <Typography variant="h6" style={{ textAlign: 'left' }}>
              {question.questionTitle}
            </Typography>
          </CardContent>
          <Button 
            component={Link} 
            to={`/question/${question.id}`} 
            state={{ filteredQuestions: questions }}  // Pass the filtered list as state
            variant="contained"
          >
            View Details
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default QuestionList;
