class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter

            } else {
                puzzle += '*'
            }
        });
        return puzzle
    }
    calculateStatus() {

        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }

    }
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try. the word was "${this.word.join('')}"`
        } else {
            return `Great work! You guessed the word.`
        }
    }
    makeGues(guess) {
        guess = guess.toLowerCase()
        const isUniqe = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUniqe) {
            this.guessedLetters.push(guess)
        }
        if (isUniqe && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
}

/*

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter

        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

Hangman.prototype.calculateStatus = function () {

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try. the word was "${this.word.join('')}"`
    } else {
        return `Great work! You guessed the word.`
    }
}

Hangman.prototype.makeGues = function (guess) {

    guess = guess.toLowerCase()
    const isUniqe = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
        return
    }

    if (isUniqe) {
        this.guessedLetters.push(guess)
    }
    if (isUniqe && isBadGuess) {
        this.remainingGuesses--
    }
    this.calculateStatus()
}
 */





















