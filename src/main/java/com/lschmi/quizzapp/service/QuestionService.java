package com.lschmi.quizzapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lschmi.quizzapp.Question;
import com.lschmi.quizzapp.dao.QuestionDAO;

@Service
public class QuestionService {

    @Autowired
    QuestionDAO questionDao;

    public List<Question> getAllQuestions() {
        return questionDao.findAll();
    }

    public List<Question> getQuestionsByCategory(String category) {
        return questionDao.findByCategoryIgnoreCase(category);
    }

    public String addQuestion(Question question) {
        questionDao.save(question);
        return "success";
    }
}
