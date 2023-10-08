import wordleBank from "./wordleWordsBank.txt"

// create wordle board having 6 rows and 5 letter word capacity

export const board=[
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

// fetching the words from the wordle bank file
export const generateWord = async () =>{
    let wordSet;
    let randomWord;
    await fetch(wordleBank)
    .then((response)=>response.text())
    .then((result)=>{
        const wordArr=result.split("\n");
        randomWord=wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet=new Set(wordArr);
    });
    return { wordSet,randomWord };
};
