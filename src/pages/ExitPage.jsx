import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExitPage.css";

const ExitPage = () => {
    const navigate = useNavigate();

    return(
        <div classname="exit-container">
            <h2>Thankyou for using Posture Correction</h2>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );

};

export default ExitPage;