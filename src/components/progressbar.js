import React, { useState } from "react";
import "../styles/App.css"

// Progress bar component that can be used with <ProgressBar/>
const ProgressBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Fill the bar with checkbox check
  const handleChange = async (event) => {
    setIsChecked(!isChecked);
    
  };

  const progress = isChecked ? 100 : 0;




  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange}/>
        Complete?
      </label>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
