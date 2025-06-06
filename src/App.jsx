import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";
import { generateWord } from "./wordList";

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attemptVal: 0,
    letterPos: 0,
  });
  const [word] = useState(generateWord());
  const [gameOver, setGameOver] = useState(false);

  const handleKeyPress = useCallback(
    (key) => {
      if (gameOver) return;

      if (key === "ENTER") {
        if (currentAttempt.letterPos !== 5) return;

        let currentWord = "";
        for (let i = 0; i < 5; i++) {
          currentWord += board[currentAttempt.attemptVal][i];
        }
        // if user gets the word, send game over alert
        if (currentWord === word) {
          setGameOver(true);
          alert("You won!");
          return;
        }
        // if user does not get the word in 5 attempts, send game over alert
        if (currentAttempt.attemptVal === 5) {
          setGameOver(true);
          alert("Game Over! The word was: " + word);
          return;
        }

        setCurrentAttempt({
          attemptVal: currentAttempt.attemptVal + 1,
          letterPos: 0,
        });
      } else if (key === "⌫") {
        if (currentAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attemptVal][currentAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrentAttempt({
          ...currentAttempt,
          letterPos: currentAttempt.letterPos - 1,
        });
        // regex to check if the key is a letter
      } else if (key.length === 1 && key.match(/[a-z]/i)) {
        if (currentAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attemptVal][currentAttempt.letterPos] =
          key.toUpperCase();
        setBoard(newBoard);
        setCurrentAttempt({
          ...currentAttempt, // using spread operator to update the current attempt
          letterPos: currentAttempt.letterPos + 1,
        });
      }
    },
    [board, currentAttempt, gameOver, word]
  );

  // useEffect hook to listen for key presses
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (event.key === "Backspace") {
        handleKeyPress("⌫");
      } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        handleKeyPress(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [board, currentAttempt, gameOver, word, handleKeyPress]);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game-container">
        <Board board={board} currentAttempt={currentAttempt} word={word} />
        <div className="legend">
          <h3>Color Guide:</h3>
          <div className="legend-item">
            <div className="color-box correct"></div>
            <span>Correct letter, correct spot</span>
          </div>
          <div className="legend-item">
            <div className="color-box almost"></div>
            <span>Correct letter, wrong spot</span>
          </div>
          <div className="legend-item">
            <div className="color-box error"></div>
            <span>Letter not in word</span>
          </div>
        </div>
      </div>
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
