import React, { useState } from "react";
import "./PostureAnalysis.css"; // Import CSS

const PostureAnalysis = () => {
  const [message, setMessage] = useState("");

  const handleAnalysis = () => {
    setMessage("Here we check the posture.");
  };

  return (
    <div className="posture-analysis-container">
      <h1>Posture Analysis</h1>
      <button onClick={handleAnalysis} className="analyze-btn">
        Start Analysis
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default PostureAnalysis;
