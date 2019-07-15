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
    document.getElementById("blanksLetters").innerText = blanks.join(" ")
    document.getElementById("Guesses-remain").innerText = guessRemain;
    document.getElementById("wins").innerText = `Wins: ${winsNum}`
    document.getElementById("losses").innerText = `Losses: ${lossNum}`
    document.getElementById("wrong-guesses").innerText = wrongGuess;
    document.getElementById("correct").innerText = letters;
};

//event listener for letter guesses

document.onkeyup = event => {
    const userGuess = event.key.toLowerCase();
    console.log(typeof userGuess)
    handleGuess(userGuess); 
    
}

const handleGuess = (userGuess)=> {
    if ((letters.includes(userGuess)) === false) {
        if (guessRemain > 0) {
            guessRemain--;
            document.getElementById("Guesses-remain").innerText = guessRemain;
            wrongGuess.push(userGuess);
            document.getElementById("wrong-guesses").innerText = wrongGuess;
        } else {
            alert("You are out of guesses!")
        }
    } else {
        console.log('right')
        letters.forEach(function(element){
            if(element === userGuess){
                let i  = letters.indexOf(userGuess);
                blanks.splice(i, 1, userGuess);
                console.log(blanks)
                return blanks;
            }
        })
        document.getElementById("blanksLetters").innerText = blanks.join(" ")
    }
}

//Main Processes
//**************************************************************************************************************** 
start();

console.log(chosenWord);
console.log(letters);
console.log(blanksNum);
console.log(blanksLetters);



