import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import QuestionList from './components/QuestionList';
import AddQuestionForm from './components/AddQuestionForm';
import QuestionDetail from './components/QuestionDetail'; // Import the new component
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import './App.css';

// Updated TopBar component
function TopBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#3f51b5', boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo192.png" // Assuming the logo is in your public folder; you can update the path as needed
            alt="Quiz Logo"
            style={{ marginRight: '10px', width: '30px', height: '30px' }}
          />
          Quiz Application
        </Typography>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            style={{
              transition: 'background-color 0.3s ease',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
            }}
          >
            Fetch Questions
          </Button>
          <Button color="inherit" component={Link} to="/quizzes">
            Quizzes
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/add-question"
            style={{
              transition: 'background-color 0.3s ease',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
            }}
          >
            Add New Question
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {/* Use TopBar as the header */}
          <TopBar />

          <Container>
            <Box my={4}>
              <Routes>
                <Route path="/" element={<QuestionList />} />
                <Route path="/add-question" element={<AddQuestionForm />} />
                <Route path="/question/:questionId" element={<QuestionDetail />} />
                <Route path="/" element={<QuizList />} />
                <Route path="/quiz/:id" element={<QuizDetail />} />
              </Routes>
            </Box>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
