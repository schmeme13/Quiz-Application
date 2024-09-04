package com.lschmi.quizzapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lschmi.quizzapp.Question;

@Repository
public interface QuestionDAO extends JpaRepository<Question, Integer>{

}
