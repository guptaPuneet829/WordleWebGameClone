import React, { useContext } from "react"
import { AppContext } from "../App"

const Key = ({keyValue,bigKey,unused}) => {
    const { gameOver,onSelectLetter,onRemove,onEnter }=useContext(AppContext);
    const selectLetter = () =>{
        if(gameOver.gameOver) return;
        if(keyValue === "ENTER"){
            onEnter();
        }
        if(keyValue === "DELETE"){
            onRemove();
        }
        else{
            onSelectLetter(keyValue);
        }
    };
    
    return(
        <div className="key" id={bigKey ? "big" : unused && "unused"} onClick={selectLetter}>
            {keyValue}
        </div>
    );
}

export default Key;