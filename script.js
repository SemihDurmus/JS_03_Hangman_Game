const words = ["Germany", "Norway", "Spain", "England", "Greece", "Italy", "France", "Sweden", "Denmark", "Albania", "Austria", "Belgium"];
const unwanted_chars = [8, 9, 16 ];

const livesElement = document.querySelector("#remaining_lives");
const wrongLetterElement = document.querySelector("#wrong_letters");
const guessAreaElement = document.querySelector("#guess");
const statusAreaElement = document.querySelector("#status");

//Creating a random word from the list
const randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

//Setting lives to green and display on the page
let lives = "&#x1F7E2 &#x1F7E2 &#x1F7E2 &#x1F7E2 &#x1F7E2";
livesElement.innerHTML = lives;
//&#x1F534

//Creating an answer array of underscores and displaying on the page
let answer_array = [];
let wordLength = randomWord.length
for (i=0; i < wordLength; i++) {
    answer_array.push("_");
};
guessAreaElement.innerHTML = answer_array.join("");


//Getting the value of a pressed key and sending to checkLetter function for processing
window.addEventListener("keydown", (e) => {
        var letter = e.key;
        console.log(letter);
        if (unwanted_chars.includes(e.keyCode)) {
            alert("Please enter a letter")
        }
        checkLetter()
    }
);

function checkLetter() {
    
    if (lives.includes("&#x1F7E2") && answer_array.includes("_") ) {
        if (randomWord.includes(letter)) {
           // for (let i=0; i<wordLength; i++) {
            //    if 
            //})
        }
    } 

} 
