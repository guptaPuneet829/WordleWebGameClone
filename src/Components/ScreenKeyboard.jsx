import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

const ScreenKeyBoard = () =>{
    // here we make screen keyboard letters in using three divs
    const keyPart1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keyPart2 = ["A","S","D","F","G","H","J","K","L"];
    const keyPart3 = ["Z","X","C","V","B","N","M"];
    const {unusedLetters,currAttempt,gameOver,onSelectLetter,onEnter,onRemove,
    }=useContext(AppContext);

    // handle the screen keyboard and its key means calling function of key that will press

    const handleScreenKeyboard=useCallback((event) => {
        if(gameOver.gameOver) return;
        if(event.key==="Enter") onEnter();
        else if(event.key==="Backspace" ) onRemove();
        else{
            keyPart1.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
            });

            keyPart2.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
            });

            keyPart3.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
            });
        }
    },[currAttempt]);

    useEffect(()=>{
        document.addEventListener("keydown",handleScreenKeyboard);
        return () =>{
            document.removeEventListener("keydown",handleScreenKeyboard);
        };
    }, [handleScreenKeyboard]);

    return(
        <div className="keyboard" onKeyDown={handleScreenKeyboard}>
        {/* here we just calling all the keys in keys part 1,2,3 using maps */}
            <div className="line1Keyboard">
                {keyPart1.map((key)=>{
                    return <Key keyValue={key} unused={unusedLetters.includes(key)}/>
                })}
            </div>

            <div className="line2Keyboard">
                {keyPart2.map((key)=>{
                    return <Key keyValue={key} unused={unusedLetters.includes(key)}/>
                })}
            </div>

            <div className="line3Keyboard">
            {/* in 3rd line of screen keyboard two extra keyword are there which is enter and delete and bigkey means size of button of that key is big just simple as that */}
                <Key keyValue={"ENTER"} bigKey />
                {keyPart3.map((key)=>{
                    return <Key keyValue={key} unused={unusedLetters.includes(key)}/>
                })}
                <Key keyValue={"DELETE"} bigKey />
            </div>
        </div>
    );
};

export default ScreenKeyBoard;