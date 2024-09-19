import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios'; // Import axios

function AddQuestionForm() {
  const [formData, setFormData] = useState({
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    difficulty_level: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/question/add', formData); // Update the URL if necessary
      console.log(response.data);
      alert('Question added successfully!'); // Alert on success
      // Reset form data
      setFormData({
        questionTitle: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        rightAnswer: '',
        difficulty_level: '',
        category: ''
      });
    } catch (error) {
      console.error('There was an error adding the question!', error);
      alert('Error adding question. Please try again.'); // Alert on error
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add a New Question
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Question Title"
          name="questionTitle"
          value={formData.questionTitle}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Option 1"
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Option 2"
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Option 3"
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Option 4"
          name="option4"
          value={formData.option4}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Right Answer"
          name="rightAnswer"
          value={formData.rightAnswer}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Difficulty Level"
          name="difficulty_level"
          value={formData.difficulty_level}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddQuestionForm;

