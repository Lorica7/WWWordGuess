// Global Variables
//**************************************************************************************************************** 
let words = ['france', 'china', 'southkorea', 'japan', 'australia', 'brazil', 'peru', 'canada', 'england', 'germany', 'poland', 'italy',
    'ireland', 'pakistan', 'yemen', 'iraq', 'turkey', 'libya', 'egypt', 'nigeria', 'rwanda', 'tanzania', 'zimbabwe', 'senegal', 'mexico', 'vietnam',
    'portugal', 'argentina', 'malaysia', 'tibet', 'haiti', 'panama', 'colombia', 'bolivia', 'israel', 'india', 'turkmenistan', 'lichtenstein', 'armenia',
    'serbia', 'finland', 'belgium', 'macedonia', 'lebanon', 'mongolia', 'guatemala', 'mauritania', 'cameroon', 'uganda']
let chosenWord = "";
let letters = [];
let blanks = [];
let wrongGuess = []
let iRandom = Math.floor(Math.random() * words.length);
let winsNum = 0
let lossNum = 0
let guessRemain = 12;

const wordDisplay = document.querySelector("#blanksLetters");
const message = document.querySelector(".message")

//Functions
//**************************************************************************************************************** 
function setGuessNum() { document.getElementById("Guesses-remain").innerText = guessRemain; }
function showWrong() { document.getElementById("wrong-guesses").innerText = wrongGuess }
function showCorrect() { document.getElementById("blanksLetters").innerText = blanks.join(" ") }
function changeWin() { document.getElementById("wins").innerText = `Wins: ${winsNum}` }
function changeLoss() { document.getElementById("losses").innerText = `Losses: ${lossNum}` }


const start = () => {
    chosenWord = words[iRandom];
    letters = chosenWord.split('');
   
    //reset
    guessRemain = 12;
    wrongGuess = [];
    //determine number of blanks needed onscreen
    for (let letter of letters) {
        blanks.push(" _  ");
        console.log(letter)
    }
    //DOM Manipulation
    setGuessNum();
    showWrong();
    showCorrect();
    changeWin();
    changeLoss();
};

const resetGame = function () {
   document.location.reload();
    chosenWord = "";
    wordDisplay.innerText = "";
    start();
}
function validateInput(guess) {
    // accept only lettersiv6edg
    const accept = /[a-zA-Z]/;
    if (!guess.match(accept)) {
        message.innerText = "Please type a single letter character."
    } else {
       message.innerText = "That's a good guess."
        return guess
    }
}
 
function checkForWin() {
    const displayText = wordDisplay.innerText;
    // Use REGEX to eliminate spaces from innerText value
    const strippedText = displayText.replace(/\s+/g, '');
    if (strippedText === chosenWord) {
        message.classList.add("won")
       message.innerText = "Congratulations! You've won the game."
    }
}


const handleGuess = (userGuess) => {
    if (guessRemain > 0) {
        if ((letters.includes(userGuess)) === false) {
            guessRemain--;
            setGuessNum();
            wrongGuess.push(userGuess);
            showWrong();
            message.innerText = "Try another letter"
        } else {
            message.innerText = "That's a very good guess."
            console.log('right')
            guessRemain--;
            setGuessNum();
            for (i = 0; i <= letters.length; i++) {
                if (letters[i] === userGuess) {
                    blanks.splice(i, 1, letters[i]);
                }
                showCorrect();
            }
        }
    } else {
        message.innerText = "You are out of guesses. Game over."
        lossNum += 1;
    }
    checkForWin()
}


//Main Processes
//**************************************************************************************************************** 
start();

        //event listener for letter guesses
        document.onkeyup = event => {
            const userGuess = event.key.toLowerCase();
            let validated = validateInput(userGuess);
            if (validated) {
                handleGuess(validated);
            }
            console.log(blanks.length)
            console.log(wordDisplay.innerText);
        }
              

//  const newGame = document.querySelector("new-game");

// newGame.addEventListener("click", function () {
    
// })

        console.log(chosenWord);
        console.log(letters);
        console.log(blanksLetters);
