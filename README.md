# Quiz Application

## Overview

This is a full-stack quiz application built with **React** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** for the database. The application allows users to interact with a quiz system, where they can fetch questions by category and add new questions.

## Technologies Used

- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Spring Boot](https://spring.io/projects/spring-boot)
- **Database**: [PostgreSQL](https://www.postgresql.org/)

## Features

- **Fetch Questions by Category**: View quiz questions filtered by category (e.g., Java, Python).
- **Add New Questions**: Submit new questions to the database via a form interface.
- **RESTful API**: Backend exposes RESTful endpoints for retrieving and adding quiz data.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (for React frontend)
- [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (for Spring Boot backend)
- [PostgreSQL](https://www.postgresql.org/download/) (for the database)

### Backend Setup (Spring Boot)

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
## Example Commands
The following are a list of urls to help get you started with understanding how the methods are mapped to the requests:
- get http://localhost:8080/question/allQuestions see all questions in the database
- get http://localhost:8080/question/category/java see categories by java
- post http://localhost:8080/question/add add a question to the database (add in JSON format through postman)
- post http://localhost:8080/quiz/create?category=java&numQ=5&title=JQuiz create a quiz (hibernate creates two tables; quiz, quiz_questions)
- post http://localhost:8080/quiz/submit/1 submit answers for quiz and recieve a score
