import React from "react";
import "../styles/LoadingIndicator.css"; // Import the CSS file for styling

const LoadingIndicator = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

const LoadingIndicatorFullPage = () => {
  return (
    <div className="loading-container-full">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingIndicator;
export {LoadingIndicatorFullPage};
