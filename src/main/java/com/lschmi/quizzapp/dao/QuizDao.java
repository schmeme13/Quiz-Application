package com.lschmi.quizzapp.dao;

import com.lschmi.quizzapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizDao extends JpaRepository<Quiz, Integer>{
}
