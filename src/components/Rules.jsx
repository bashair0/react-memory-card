import { useState } from "react";
import "../styles/Rules.css";

export default function Rules() {
  const [isStarted, setIsStarted] = useState(false);

  function handleStart() {
    setIsStarted(!isStarted);
  }
  return (
    <div className="Rules" style={{ display: isStarted ? "none" : "block" }}>
      <h3>This is a memory card game</h3>
      <p>Get scores by clicking on cards but be careful!</p>
      <p>If you click a card twice you will lose!</p>
      <button type="button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
