import React from "react";

const Letter = ({ letterPos, attempVal, board, word, currentAttempt }) => {
  const letter = board[attempVal][letterPos];

  const correct = word[letterPos] === letter;
  const almost = !correct && letter !== "" && word.includes(letter);

  const letterState =
  // if the letter is in the correct position
    attempVal < currentAttempt.attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "error"
      : "";

  return <div className={`letter ${letterState}`}>{letter}</div>;
};

export default Letter;
