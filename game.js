// Global Variables
//**************************************************************************************************************** 
let words = ['france', 'china', 'southkorea', 'japan', 'australia', 'brazil', 'peru', 'canada', 'england', 'germany', 'poland', 'italy',
    'ireland', 'pakistan', 'yemen', 'iraq', 'turkey', 'libya', 'egypt', 'nigeria', 'rwanda', 'tanzania', 'zimbabwe', 'senegal', 'mexico', 'vietnam',
    'portugal', 'argentina', 'malaysia', 'tibet', 'haiti', 'panama', 'colombia', 'bolivia', 'israel', 'india', 'turkmenistan', 'lichtenstein', 'armenia',
    'serbia', 'finland', 'belgium', 'macedonia', 'lebanon', 'mongolia', 'guatemala', 'mauritania', 'cameroon', 'uganda']
let chosenWord = ""
let letters = [];
let blanksNum = 0
let blanks = [];
let wrongGuess = []
let iRandom = Math.floor(Math.random() * words.length);
let winsNum = 0
let lossNum = 0
let guessRemain = 12;


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
    blanksNum = letters.length;

    //reset
    guessRemain = 12;
    wrongGuess = [];

    //determine number of blanks needed onscreen
    for (let i = 0; i < blanksNum; i++) {
        blanks.push(" _  ");
    }
    //DOM Manipulation
    setGuessNum();
    showWrong();
    showCorrect();
    changeWin();
    changeLoss();
};

const handleGuess = (userGuess) => {
    if ((letters.includes(userGuess)) === false) {
        if (guessRemain > 0) {
            guessRemain--;
            setGuessNum();
            wrongGuess.push(userGuess);
            showWrong();
        } else {
            alert("You are out of guesses!")
        }
    } else {
        console.log('right')
        guessRemain--;
        setGuessNum();
        for(i=0; i<letters.length; i++) {
            if (letters[i] === userGuess) {
                blanks.splice(i, 1, letters[i]);
                console.log(blanks)
            }
            showCorrect();
        }
    }
}

//Main Processes
//**************************************************************************************************************** 
start();

//event listener for letter guesses
document.onkeyup = event => {
    const userGuess = event.key.toLowerCase();
    console.log(typeof userGuess)
    handleGuess(userGuess);
}

console.log(chosenWord);
console.log(letters);
console.log(blanksNum);
console.log(blanksLetters);



