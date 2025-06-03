import React from "react";
import Letter from "./Letter";

const Board = ({ board, currentAttempt, word }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => ( 
        <div className="row" key={rowIndex}>
          {row.map((letter, letterIndex) => (
            <Letter
              key={letterIndex}
              letterPos={letterIndex}
              attempVal={rowIndex}
              board={board}
              word={word}
              currentAttempt={currentAttempt}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
