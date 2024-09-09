package com.lschmi.quizzapp.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Entity
@Data
public class Quiz {

    @Id
    @GeneratedValue
    private Integer id;
    private String title;

    @ManyToMany
    private List<Question> questions;
}
