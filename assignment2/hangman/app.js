const inputs = document.querySelector(".inputs")
const typingInput = document.querySelector(".typing-input")
const wrongLetter = document.querySelector(".wrong-letter span")
const attempts = document.querySelector(".tries-remaining span")
const playAgainBtn = document.getElementById("btn")
const popup = document.getElementById("popup-container")
const notification = document.getElementById("notification-container")
const finalMessage = document.getElementById("final-message")


const words = ["lion", "tiger", "dog", "hornbill", "whale", "monkey", "goldfish", "snake", "eagle", "beetle", "gorilla", "spider", "duck", "leopard", "ladybug", "bear", "crab"]

let correctLetters = []
let wrongLetters = []
let maxAttempts = []
// let typedKey = []
let count = 0;

let selectedWord = words[Math.floor(Math.random() * words.length)]
// get the random word

function randomWord() {
    // get random word from words array
    maxAttempts = 5 // by default
    attempts.innerText = maxAttempts
    console.log(selectedWord);
    // console.log(selectedWord.length)



    attempts.innerText = maxAttempts;


    let html = "";
    for(let i = 0; i < selectedWord.length; i++) {
        html += `<input type="text" maxlength= "1">
        `;
    }
    inputs.innerHTML = html
}

randomWord();

//keyboard
function generateLetter(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !wrongLetters.includes(` ${key}`) && !correctLetters.includes(` ${key}`)) {
        console.log(key);
        
        // check if the letter is in the word or not
        if(selectedWord.includes(key)) {
            console.log("same key"); 
        
            for(let i = 0; i < selectedWord.length; i++) {
                if(selectedWord[i] === key) {
                    correctLetters.push(key)
                    // console.log(correctLetters)
                    // console.log(correctLetters.length)

                    inputs.querySelectorAll("input")[i].value = key;

                    // count ++;
                    // if(count > 1) {
                    //     showNotification()
                    // }
                    
                } 
            }
        } else {
            maxAttempts--;
            wrongLetters.push(` ${key}`)
        }
        wrongLetter.innerText = wrongLetters;
        attempts.innerText = maxAttempts;
    }
    typingInput.value = ""

    if(correctLetters.length === selectedWord.length) {
        finalMessage.innerText = "Well done!";
        popup.style.display = "flex";
        // console.log("yes!")
       
    } else if(maxAttempts < 1) {
        displayGameOver()
    }
    
} 


typingInput.addEventListener("input", generateLetter)
document.addEventListener("keydown", () => typingInput.focus())


function showNotification() {
    notification.classList.add("show")
    
// let the popup disappear after 2 seconds automatically
    setTimeout(() => {
        notification.classList.remove("show")
    }, 2000)
}

function displayGameOver() {
    finalMessage.innerText = 'Unfortunately you lost, try again!';
    popup.style.display = "flex"
}

// restart game and play again

playAgainBtn.addEventListener("click",() => {
    //reset the array back to 0
    correctLetters.splice(0);
    wrongLetters.splice(0);

    wrongLetter.innerText = "";
    attempts.innerText = ""

    selectedWord = words[Math.floor(Math.random() * words.length)]

    randomWord()

    popup.style.display = "none"
})


