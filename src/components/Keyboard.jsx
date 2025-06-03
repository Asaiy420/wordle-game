import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="line3">
        {keys3.map((key) => (
          <button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
