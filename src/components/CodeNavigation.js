import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const CodeNavigation = () => {
  const [showButtons, setShowButtons] = useState(true);

  const handleButtonClick = () => {
    setShowButtons(false); // Hide the buttons
  };

  return (
    <div className="code-nav">
      {showButtons && (
        <div>
          <Link
            to="/hackings/exercise1"
            className="nav-button"
            onClick={handleButtonClick}
          >
            Find the Runner-Up Score!
          </Link>
          <Link
            to="/hackings/exercise2"
            className="nav-button"
            onClick={handleButtonClick}
          >
            Nested Lists
          </Link>
          <Link
            to="/hackings/exercise3"
            className="nav-button"
            onClick={handleButtonClick}
          >
            Lists
          </Link>
          <Link
            to="/hackings/exercise4"
            className="nav-button"
            onClick={handleButtonClick}
          >
            Tuples
          </Link>
          <Link
            to="/hackings/exercise5"
            className="nav-button"
            onClick={handleButtonClick}
          >
            Print Hello World!
          </Link>
        </div>
      )}
    </div>
  );
};


