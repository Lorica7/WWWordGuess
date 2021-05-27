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
    start();
}
 
function checkForWin() {
    const displayText = wordDisplay.innerText;
    // Use REGEX to eliminate spaces from innerText value
    const strippedText = displayText.replace(/\s+/g, '');
    if (strippedText=== chosenWord) {
        alert("Congratulations, You have won the game!")
    }
}

const handleGuess = (userGuess) => {
    if ((letters.includes(userGuess)) === false) {
        if (guessRemain > 0) {
            guessRemain--;
            setGuessNum();
            wrongGuess.push(userGuess);
            showWrong();
        } else {
            alert("You are out of guesses!")
            lossNum += 1;
            resetGame();
        }
    } else {
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
    checkForWin();
}


//Main Processes
//**************************************************************************************************************** 
start();

        //event listener for letter guesses
        document.onkeyup = event => {
            const userGuess = event.key.toLowerCase();
            handleGuess(userGuess);
            console.log(blanks.length)
            console.log(wordDisplay.innerText);
        }

// const newGame = document.querySelector("new-game");

// newGame.addEventListener("click", function () {
    
// })

        console.log(chosenWord);
        console.log(letters);
        console.log(blanksLetters);
