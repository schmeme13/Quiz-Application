import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import QuestionList from './components/QuestionList';
import AddQuestionForm from './components/AddQuestionForm';
import QuestionDetail from './components/QuestionDetail'; // Import the new component

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Quiz Application
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Fetch Questions
              </Button>
              <Button color="inherit" component={Link} to="/add-question">
                Add New Question
              </Button>
            </Toolbar>
          </AppBar>

          <Container>
            <Box my={4}>
              <Routes>
                <Route path="/" element={<QuestionList />} />
                <Route path="/add-question" element={<AddQuestionForm />} />
                <Route path="/question/:questionId" element={<QuestionDetail />} />
              </Routes>
            </Box>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
