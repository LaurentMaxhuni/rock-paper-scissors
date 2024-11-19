import React from 'react';

function Score(props) {
    const name = localStorage.getItem("userName").toUpperCase() || "YOU"; 

    return <div className='score'>
        <div className="ai-score">
            <h1>{props.aiScore}</h1>
            <h2>AI</h2>
        </div>
        <div className="human-score">
            <h1>{props.humanScore}</h1>
            <h2>{name}</h2>
        </div>
    </div>;
}

export default Score;