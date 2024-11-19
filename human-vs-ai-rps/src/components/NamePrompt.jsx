import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NamePrompt.css'; 


const NamePrompt = () => {
  const [userInput, setUserInput] = useState(""); 
  const navigate = useNavigate(); 

  const handleDefault = () => {
    setUserInput("You"); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") {
      alert("Please enter a name!");
    } else {
      localStorage.setItem("userName", userInput); 
      alert(`Name submitted: ${userInput}`);
      navigate("/game");
    }
  };

  return (
    <div className="name-prompt-container">
      <form onSubmit={handleSubmit}>
      <h2>What is your name?</h2>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your name"
        />
        <div>
          <button type="button" onClick={handleDefault}>
            Set Default Name
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NamePrompt;
