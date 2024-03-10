import React, { useState } from 'react';
import Card from './Card';

const FLASHCARD_DATA = [
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What is 12 - 7?", answer: "5" },
    { question: "What is 8 * 2?", answer: "16" },
    { question: "What is 48 / 6?", answer: "8" },
    { question: "What is the result of 3^2?", answer: "9" },
    { question: "What is the remainder when you divide 25 by 4?", answer: "1" },
    { question: "How many zeros are in the product of 5 * 10?", answer: "1" },
    { question: "What is 2 to the power of 5?", answer: "32" },
    { question: "If you have 45 apples and you give away 12, how many do you have left?", answer: "33" },
    { question: "What is the product of 7 * 6?", answer: "42" },
];

const Display = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [guess, setGuess] = useState(''); 
    const [message, setMessage] = useState(''); 

    const currentCard = FLASHCARD_DATA[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % FLASHCARD_DATA.length);
        resetInput();
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + FLASHCARD_DATA.length) % FLASHCARD_DATA.length);
        resetInput();
    };

    const handleChange = (e) => {
        setGuess(e.target.value);
    };

    const checkAnswer = () => {
        if (guess.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
            setMessage('Correct!');
        } else {
            setMessage('Wrong!');
        }
    };

    const resetInput = () => {
        setGuess('');
        setMessage('');
    };

    return (
        <div className="Display">
            <h1>Math Flashcards</h1>
            <h5>Learn Some Math</h5>
            <h5>Number of cards: {FLASHCARD_DATA.length}</h5>
            <Card 
                key={currentIndex}
                question={currentCard.question} 
                answer={currentCard.answer}
            />
            <div className="guess">
                <input value={guess} onChange={handleChange} placeholder="Your guess" />
                <button onClick={checkAnswer}>Submit</button>
                <p>{message}</p>
            </div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Display;
