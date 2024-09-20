import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuestionDetail = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { filteredQuestions = [] } = location.state || {};
  
  const [question, setQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchQuestionDetails = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/question/${id}`);
        setQuestion(response.data);
        
        const index = filteredQuestions.findIndex(q => q.id === parseInt(id));
        setCurrentIndex(index);
      } catch (error) {
        console.error('Error fetching question details', error);
      }
    };

    if (questionId) {
      fetchQuestionDetails(questionId);
    }
  }, [questionId, filteredQuestions]);

  const handleBack = () => {
    navigate('/');
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      const nextQuestionId = filteredQuestions[currentIndex + 1].id;
      navigate(`/question/${nextQuestionId}`, { state: { filteredQuestions } });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousQuestionId = filteredQuestions[currentIndex - 1].id;
      navigate(`/question/${previousQuestionId}`, { state: { filteredQuestions } });
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon /> Back to Questions
      </IconButton>
      
      {question && (
        <Box>
          <Typography variant="h4">{question.questionTitle}</Typography>

          <Box display="flex" flexDirection="column" alignItems="stretch">
            {/* Display options as buttons */}
            {['option1', 'option2', 'option3', 'option4'].map((opt, index) => {
              const optionValue = question[opt];
              const isCorrect = optionValue === question.rightAnswer;
              const isSelected = selectedOption === optionValue;

              return (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => handleOptionClick(optionValue)}
                  style={{
                    margin: '10px 0', // Adjust vertical spacing
                    backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : 'grey',
                    flex: 1, // Make the button take up the available space
                    width: '100%', // Ensure buttons stretch full width
                  }}
                >
                  {optionValue}
                </Button>
              );
            })}
          </Box>

          <Box>
            <IconButton 
              onClick={handlePrevious} 
              disabled={currentIndex <= 0}
            >
              <ArrowBackIcon />
            </IconButton>
            
            <IconButton 
              onClick={handleNext} 
              disabled={currentIndex >= filteredQuestions.length - 1}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default QuestionDetail;
