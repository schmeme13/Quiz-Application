package com.lschmi.quizzapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lschmi.quizzapp.dao.QuizDao;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;

    
}
