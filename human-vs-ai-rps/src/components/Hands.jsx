import React from "react";
import aiPaper from "../assets/ai-paper.png";
import aiRock from "../assets/ai-rock.png";
import aiScissors from "../assets/ai-scissors.png";
import humanPaper from "../assets/human-paper.png";
import humanRock from "../assets/human-rock.png";
import humanScissors from "../assets/human-scissors.png";

function Hands(props) {
  const aiHandClass = props.shake ? "ai-hand shake-ai" : "ai-hand";
  const humanHandClass = props.shake ? "human-hand shake-human" : "human-hand";

  return (
    <div className="hands">
      <img
        className={aiHandClass}
        src={
          props.aiHand === null ? aiRock : props.aiHand === "rock"
            ? aiRock
            : props.aiHand === "paper"
            ? aiPaper
            : aiScissors
        }
        alt="ai-hand"
      />
      <img
        className={humanHandClass}
        src={
            props.aiHand === null ? humanRock : props.humanHand === "rock"
            ? humanRock
            : props.humanHand === "paper"
            ? humanPaper
            : humanScissors
        }
        alt="human-hand"
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
}

export default Hands;
