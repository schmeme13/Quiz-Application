package com.lschmi.quizzapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lschmi.quizzapp.dao.QuestionDAO;
import com.lschmi.quizzapp.dao.QuizDao;
import com.lschmi.quizzapp.model.Question;
import com.lschmi.quizzapp.model.QuestionWrapper;
import com.lschmi.quizzapp.model.Quiz;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;
    @Autowired
    QuestionDAO questionDao;

    @Transactional
    public ResponseEntity<String> createQuiz(String category, int numQ, String title) {
        List<Question> questions = questionDao.findRandomQuestionsByCategory(category, numQ);
        
        // Check if questions are found
        if (questions.isEmpty()) {
            return new ResponseEntity<>("No questions found for the category", HttpStatus.BAD_REQUEST);
        }
    
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        
        quizDao.save(quiz);
        
        // Explicitly flush changes
        quizDao.flush();
        
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }

    
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Question> questionsFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionsForUser = new ArrayList<>();

        for(Question q : questionsFromDB) {
            QuestionWrapper wrapper = new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4());
            questionsForUser.add(wrapper);
        }

        return new ResponseEntity<>(questionsForUser, HttpStatus.OK);
    }
    
 
}
