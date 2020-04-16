// HOW TO MAKE CONSTRUCTOR FUNCTIONS AND HOW TO COSTUMISE IT
const Hangman = function (word, remainingGuese, guesedLetters) {
    this.word = word.toLowerCase().split('')
    this.remainingGuese = remainingGuese
    this.guesedLetters = guesedLetters.toLowerCase()
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guesedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });

    return puzzle
}

const game1 = new Hangman('cat', 2, 'c, a')
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 9, 'j, y')
console.log(game2.getPuzzle())

/* OUTPUT:
ca*
*** j****y
*/