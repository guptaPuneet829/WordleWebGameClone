import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOverPart = () => {
    const {currAttempt,gameOver,correctWord}=useContext(AppContext);
    return(
        <div className="gameOver">
            <h3>
                {gameOver.guessWord ? "Good Job.. You Guess the Correct Wordle":"Oh no.. You Guess the Wrong Wordle"}
            </h3>
            <h1>Correct Wordle : { (correctWord || '').toUpperCase() } </h1>
            {gameOver.guessWord && (<h3>You Guess the Wordle in {currAttempt.attempt} attempts</h3>)}
        </div>
    );
};

export default GameOverPart; 