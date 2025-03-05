package com.lschmi.quizzapp.service;

import com.lschmi.quizzapp.dao.QuestionDAO;
import com.lschmi.quizzapp.model.Question;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class QuestionServiceTest {

    @Mock
    private QuestionDAO questionDAO; //Fake DAO, so we don’t hit the actual database

    @InjectMocks
    private QuestionService questionService; //The service we're testing

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this); //Sets up mock objects before each test runs
    }

    @Test
    public void testGetAllQuestions() {
        //Manually creating a couple of sample questions
        Question question1 = new Question();
        question1.setId(1);
        question1.setQuestionTitle("Question 1");
        question1.setCategory("Category 1");
        question1.setRightAnswer("Answer 1");

        Question question2 = new Question();
        question2.setId(2);
        question2.setQuestionTitle("Question 2");
        question2.setCategory("Category 2");
        question2.setRightAnswer("Answer 2");

        List<Question> questions = Arrays.asList(question1, question2);

        //When
        when(questionDAO.findAll()).thenReturn(questions); //Simulating database returning these questions
        //Then
        ResponseEntity<List<Question>> response = questionService.getAllQuestions();

        assertEquals(200, response.getStatusCodeValue()); //Checking if the response is OK
        assertEquals(2, response.getBody().size()); //Making sure we got both questions back
        assertEquals("Question 1", response.getBody().get(0).getQuestionTitle()); //Confirming the first question’s title
    }
}
