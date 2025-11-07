import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`tooltip-content tooltip-${position}`}>
          <div className="tooltip-arrow"></div>
          <div className="tooltip-text">{content}</div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
