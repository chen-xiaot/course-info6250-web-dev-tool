# Basic JS

You will create a number of .js files that can be run with `node myfile.js`.

You can find additional documentation on the various assertions available in tape here: 
https://github.com/substack/tape  (scroll down to 'methods')

## Requirements for All

Don't forget to run `npm install` - this will automatically install tape, nodemon, tap-notify, and tap-summary.

All of the JS in this set of exercises is logic only - no browser involved, run from the command line.

Other than `tape` and your own files, please do not `require` or otherwise import additional files into your code.

You are welcome to use other tools and libraries during development and testing, as long as they do not end up in your code.

You are welcome to include/require your own code from one task in another, if you find it helpful.

## Exercises

### Letter Count

There is a letter-count.js file (mostly empty) and a letter-count.test.js file here.  

You should use the existing tests to figure out what the code is expected to do.

Fill in the letter-count.js file so that the letter-count.test.js file passes and works as intended.

### Word Match 

There is a word-match.js file (mostly empty) and a word-match.test.js file (mostly empty).

Fill in both files so that these requirements are filled and are well-tested:
* The match() function is passed two words of the same length
* The match() function returns a number
* The returned number is the number of letters the two words have in common, regardless of position.  Examples:
    * 'guess' and 'guest' is 4
    * 'traps' and 'parts' is 5
    * 'alpha' and 'gross' is 0
    * 'trees' and 'beets' is 4
* This match is case insensitive:
    * 'GUESS' and 'guest' is 4
* If the words are of different length or are falsy it should return null
* You can assume that you will either be passed strings or falsy values

## Word Game 

There is a word-game.js file (REALLY empty) and a word-game.test.js file (filled in).

The word-game works as follows:
* You start a game by passing the difficulty level
    * If no difficulty is passed, it will default to one of the existing difficulties
    * starting a game resets any existing game
* The code will select a random word from a word-list based on the difficulty.
* The caller is not given the word
* The caller can make calls trying to guess the secret word
* Each call with a valid guess (see tests) returns an object 
    * A 'won' property is a boolean to say if the word was correct
    * A 'guesses' property is a count of how many guesses have been made
    * A 'matched' property is a count of how many letters the words have in common
 
Fill in the word-game.js file so that the included tests pass as intended.

You may add additional tests.
