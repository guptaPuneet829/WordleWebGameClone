import './App.css';
import React,{useState,createContext,useEffect} from 'react'
import Matrix from './Components/Matrix'
import ScreenKeyBoard from './Components/ScreenKeyboard'
import {board,generateWord} from "./wordFormat"
import GameOverPart from './Components/GameOverPart';

export const AppContext = createContext();

const App=()=>{
  const [matrix,setMatrix] = useState(board);
  const [currAttempt,setCurrAttempt] = useState({attempt : 0,letter: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [unusedLetters, setUnusedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false,guessWord: false});

  useEffect(() => {
    generateWord().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.randomWord);
    });
  }, []);

  const onEnter = () => {
    // check 5 word letter or not
    if (currAttempt.letter !== 5) return;
    // if yes then check that particular word is exists or not in wordle bank 
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += matrix[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      // if not exists alert it
      alert("Word Not Exists");
    }
    // if particular word is randomWord then gotcha game over 
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessWord: true });
      return;
    }
    // here currAttempt will be 5 means game will over but wordle not cracked then make guessedWord false
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessWord: false });
      return;
    }
  };

  // if you pressed delete keyword on keyboard

  const onRemove = () => {
    if (currAttempt.letter === 0) return;
    const newMatrix = [...matrix];
    newMatrix[currAttempt.attempt][currAttempt.letter - 1] = "";
    setMatrix(newMatrix);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newMatrix = [...matrix];
    // currAttempt.attempt means row number and currAttempt.letter means column number
    newMatrix[currAttempt.attempt][currAttempt.letter] = key;
    setMatrix(newMatrix);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1><span id='w'>w</span>o<span id='r'>r</span>d<span id='l'>l</span>e</h1>
      </nav>
      <AppContext.Provider
        value={{
          matrix,
          setMatrix,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onRemove,
          onEnter,
          setUnusedLetters,
          unusedLetters,
          gameOver,
        }}>
        <div className="game">
          <Matrix />
          {gameOver.gameOver ? <GameOverPart /> : <ScreenKeyBoard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}
export default App;
