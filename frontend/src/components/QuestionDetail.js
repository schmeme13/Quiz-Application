import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionDetail = () => {
    const { questionId } = useParams();
    const [question, setQuestion] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchQuestionDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/question/${questionId}`);
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();
                setQuestion(data);  // Set the question data from the backend
            } catch (error) {
                console.error("Error fetching question details:", error);
                setError(true);
            }
        };

        fetchQuestionDetails();
    }, [questionId]);

    if (error) {
        return <p>Error fetching question details.</p>;
    }

    if (!question) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{question.questionTitle}</h2>
            <ul>
                <li>Option 1: {question.option1}</li>
                <li>Option 2: {question.option2}</li>
                <li>Option 3: {question.option3}</li>
                <li>Option 4: {question.option4}</li>
            </ul>
            <p>Correct Answer: {question.rightAnswer}</p>
            <p>Difficulty Level: {question.difficulty_level}</p>
            <p>Category: {question.category}</p>
        </div>
    );
};

export default QuestionDetail;
