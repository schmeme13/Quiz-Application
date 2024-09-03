package com.lschmi.quizzapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("question")
public class QuestionController {
    @GetMapping("allQuestions")
    public String getAllQuestions() {
        return "Hi, these are your questions";
    }
    
}
