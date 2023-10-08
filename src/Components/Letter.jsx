import React,{ useEffect,useContext } from "react"
import { AppContext } from "../App"

const Letter = ({ letterPosition,attemptsValue }) =>{
    const {matrix,setUnusedLetters,currAttempt,correctWord} = useContext(AppContext);
    // identify the each row word and check either its correct,almost or error
    const letter=matrix[attemptsValue][letterPosition];
    // correct means all 5 letter are matched with random word
    const correct=(correctWord || '').toUpperCase()[letterPosition]===letter;
    // almost means some letters and present in the random word
    const almost = !correct && letter!=="" && (correctWord || '').toUpperCase().includes(letter);
    // here we check if attemptsValue value greater than 6 then till now word either be correct , almost or error
    const letterState = currAttempt.attempt > attemptsValue && (correct ? "correct" : almost ? "almost" : "error");

    // here we just disabled the letter that and not present in the random word and that particular letter we are trying to guess 
    useEffect(()=>{
        // particular word that are not correct and not almost and letter not empty it means that particular word will be error word which are not random word
        if(letter !== "" && !correct && !almost){
            setUnusedLetters((prev) => [...prev,letter]);
        }
    },[currAttempt.attempt]);

    return(
        <div className="letter" id={letterState}>
            {letter}
        </div>
    );
}

export default Letter;