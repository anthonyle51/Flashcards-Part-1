import React, { useState } from "react";

const Card = ({ question, answer, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`Card ${color}`} onClick={toggleFlip} style={{cursor: 'pointer'}}>
            <p>{isFlipped ? answer : question}</p>
        </div>
    );
};

export default Card;