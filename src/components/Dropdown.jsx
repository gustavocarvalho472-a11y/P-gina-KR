import React from 'react';
import './Dropdown.css';

function Dropdown({
  label,
  value,
  options,
  onChange,
  placeholder,
  isOpen,
  onToggle,
  disabled = false,
  wide = false,
  white = false
}) {
  return (
    <div className={`dropdown ${wide ? 'wide' : ''}`}>
      {label && <span className="dropdown-label">{label}</span>}
      <button
        className={`dropdown-button ${isOpen ? 'open' : ''} ${white ? 'white' : ''}`}
        onClick={onToggle}
        disabled={disabled}
      >
        <span>{value || placeholder}</span>
        <div className="dropdown-arrow"></div>
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        {options.map((option) => (
          <div
            key={option}
            className={`dropdown-item ${value === option ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
