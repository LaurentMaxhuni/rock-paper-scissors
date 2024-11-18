import React, { useState } from "react";
import aiPaper from "../assets/ai-paper.png";
import aiRock from "../assets/ai-rock.png";
import aiScissors from "../assets/ai-scissors.png";
import humanPaper from "../assets/human-paper.png";
import humanRock from "../assets/human-rock.png";
import humanScissors from "../assets/human-scissors.png";

function Hands(props) {
    return (
        <div className="hands">
            <img className="ai-hand" src={props.aiHand === null ? aiRock : props.aiHand === "rock" ? aiRock : props.aiHand === "paper" ? aiPaper : aiScissors} alt="ai-hand" />
            <img className="human-hand" src={props.humanHand === null ? humanRock : props.humanHand === "rock" ? humanRock : props.humanHand === "paper" ? humanPaper : humanScissors} alt="human-hand" />
        </div>
    );
}

export default Hands;
