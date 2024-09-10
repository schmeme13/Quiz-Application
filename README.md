# Quiz-Application
Quiz application that utilizes Spring Boot Framework and PostgreSQL database

# Example Commands
The following are a list of urls to help get you started with understanding how the methods are mapped to the requests:
- get http://localhost:8080/question/allQuestions see all questions in the database
- get http://localhost:8080/question/category/java see categories by java
- post http://localhost:8080/question/add add a question to the database (add in JSON format through postman)
- post http://localhost:8080/quiz/create?category=java&numQ=5&title=JQuiz create a quiz (hibernate creates two tables; quiz, quiz_questions)
- post http://localhost:8080/quiz/submit/1 submit answers for quiz and recieve a score
