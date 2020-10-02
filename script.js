const words = ["germany", "norway", "spain", "england", "greece", "italy", "france", "sweden", "denmark", "albania", "austria", "belgium"];

const livesElement = document.querySelector("#remaining_lives");
const wrongLetterElement = document.querySelector("#wrong_letters");
const guessAreaElement = document.querySelector("#guess");
const statusAreaElement = document.querySelector("#status");

//Creating a random word from the list
const randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

//Setting lives to green and display on the page
let lives = ["&#x1F7E2", "&#x1F7E2", "&#x1F7E2", "&#x1F7E2", "&#x1F7E2"];
livesElement.innerHTML = lives.join("");

//Variable for showing the worg letters
wrong_array = [];
wrongLetterElement.innerHTML = wrong_array.join(" ");

//Creating an answer array of underscores and displaying on the page
let answer_array = [];
let wordLength = randomWord.length;

for (i=0; i < wordLength; i++) {
    answer_array.push("_");
};
guessAreaElement.innerHTML = answer_array.join("");


//Getting the value of a pressed key and sending to checkLetter function for processing
// KeyCodes a->65 z->90  
window.addEventListener("keydown", (e) => {
        const letter = e.key;
        if ((e.keyCode < 65) || (e.keyCode > 90) ) {
            alert("Please enter a letter")
        }
        statusAreaElement.innerText = "";
        checkLetter(letter)
    }
);

function checkLetter(x) {
    
    if (lives.includes("&#x1F7E2") && answer_array.includes("_")) {

        if (answer_array.includes(x) || wrong_array.includes(x)) {
            alert("You entered '" + x + "' before.");
        } else if (randomWord.includes(x)) {
            for (let i=0; i<wordLength; i++) {
                if (randomWord[i] == x) {
                    answer_array[i] = x;
                }
            }

            guessAreaElement.innerText = answer_array.join("");

        } else {
            lives.push("&#x1F534");
            lives.shift();
            livesElement.innerHTML = lives.join(" ");
            wrong_array.push(x);
            wrongLetterElement.innerHTML = wrong_array.join(" ");
        }
    } else if (! lives.includes("&#x1F7E2")) {
        statusAreaElement.innerText = "Sorry, you could not complete the game. \nBetter luck next time"
    }

} 


//             console.log(x.toUpperCase());
