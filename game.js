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

let winsNum = 0
let lossNum = 0
let guessRemain = 12;


//Functions
//**************************************************************************************************************** 
const start = () => {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    letters = chosenWord.split('');
    blanksNum = letters.length;


    //reset
    guessRemain = 12
    wrongGuess = []
 

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
};


//Main Processes
//**************************************************************************************************************** 
start();

console.log(chosenWord);
console.log(letters);
console.log(blanksNum);
console.log(blanksLetters);



