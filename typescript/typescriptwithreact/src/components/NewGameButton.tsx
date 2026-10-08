import type { JSX } from "react";

/*
CHALLENGE: Try to type startNewGame
SYNTAX: prop: (parameters) => returnType
*/

export default function NewGameButton({
  isGameOver,
  startNewGame,
}: {
  isGameOver: boolean;
  startNewGame: () => void;
  //if it takes a param and return a number 
  //startNewGame: (name:string) => number;
}): JSX.Element | null {
  if (!isGameOver) {
    return null;
  } else {
    return (
      <button className="new-game" onClick={startNewGame}>
        New Game
      </button>
    );
  }
}
