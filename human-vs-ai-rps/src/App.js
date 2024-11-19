import Game from "./components/Game.jsx";
import "./App.css";
import NamePrompt from "../src/components/NamePrompt.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<NamePrompt />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
