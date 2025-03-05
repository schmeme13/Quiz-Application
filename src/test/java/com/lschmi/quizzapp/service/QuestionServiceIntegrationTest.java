package com.lschmi.quizzapp;

import com.lschmi.quizzapp.model.Question;
import com.lschmi.quizzapp.service.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class QuestionServiceIntegrationTest {

    @Autowired
    private QuestionService questionService;

    @Test
    public void testAddAndGetQuestionByCategory() {
        // Given: Create a new question
        Question question = new Question();
        question.setQuestionTitle("What is the capital of France?");
        question.setOption1("Berlin");
        question.setOption2("Madrid");
        question.setOption3("Paris");
        question.setOption4("Rome");
        question.setRightAnswer("Paris");
        question.setDifficulty_level("Easy");
        question.setCategory("Geography");

        // When: Add the question using the service
        questionService.addQuestion(question);

        // Then: Verify the question is saved by fetching it by category
        var response = questionService.getQuestionsByCategory("Geography");

        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody()).isNotEmpty();
        assertThat(response.getBody().get(0).getQuestionTitle()).isEqualTo("What is the capital of France?");
    }

    @Test
    public void testGetAllQuestions() {
        // When: Retrieve all questions
        var response = questionService.getAllQuestions();

        // Then: Verify that the list is not empty
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody()).isNotEmpty();
    }

    @Test
    public void testGetQuestionById() {
        // Given: Assuming a question with ID 1 exists
        Integer questionId = 1;

        // When: Retrieve the question by ID
        var response = questionService.getQuestionById(questionId);

        // Then: Verify that the question is found
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getId()).isEqualTo(questionId);
    }
}
