package com.lschmi.quizzapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lschmi.quizzapp.Question;

@Repository
public interface QuestionDAO extends JpaRepository<Question, Integer>{

    List<Question> findByCategoryIgnoreCase(String category);
}
