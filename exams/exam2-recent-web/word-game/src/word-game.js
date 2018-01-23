const game = {
  difficulties: {
    'silly': ['SILLY'],
    'easydumb': ['EASY', 'DUMB'],
    'easy': ['CAT', 'DOG', 'COG', 'PAT', 'HIT', 'PIE', 'PIG', 'DIP'],
    'normal': ['STARS', 'START', 'STRAP', 'PARTS', 'RANTS', 'STAND', 'GUESS', 'TREES', 'GUEST', 'TRAPS', 'GREET'],
    'hard': ['TEASER', 'RESCUE', 'STACKS', 'TRUCKS', 'DUCKED', 'SPIRIT', 'EASIER', 'PANDER', 'STUPOR', 'RUSTED', 'PLANTS', 'STRIPE', 'STRIDE', 'CUSTOM', 'MASKED', 'WREATH', 'STREWN', 'BRUTES', 'BRAINS', 'BEASTS', 'RIBBON', 'HAPPEN', 'NAPPED', 'NIGHTS', 'KNIGHT'],
  },

  guessTimes: 0,

  answer: null,

  prevGuesses: [],

  reset() {
    this.guessTimes = 0;
    this.answer = null;
    this.prevGuesses = [];
  },

  start(diff) {
    const levels = ['silly', 'easydumb', 'easy', 'normal', 'hard'];
    if (!levels.includes(diff)) {
      return;
    }

    this.reset();
    this.answer = this.setAnswer(diff);
    console.log(this.answer);
    return this.answer.length;
  },

  setAnswer(diff) {
    const answerWords = this.difficulties[diff];
    const index = getRandomIndex(answerWords.length);
    const randomAnswer = answerWords[index];
    return randomAnswer;
  },

  guess (input) {
    if (!this.isValidInput(input)) {
      return;
    }

    input = input.toUpperCase();
    this.prevGuesses.push(input);
    this.guessTimes++;
    
    const obj = {
      win: input === this.answer,
      turns: this.guessTimes,
      matched: match(input, this.answer),
      exactMatched: exactMatch(input, this.answer),
      theAnswer: input === this.answer ? input : undefined
    }

    return obj;
  },

  isValidInput (input) {
    const letters = /^[A-Za-z]+$/;
    if (!input || !input.match(letters)) {
      return false;
    }

    input = input.toUpperCase();

    if (input.length !== this.answer.length || this.prevGuesses.includes(input)) {
      return false;
    } else {
      return true;
    }
  },

  guesses() {
    return this.guessTimes;
  }
};


const getRandomIndex = int => {
  return Math.floor(Math.random() * int);
};

const match = (first, second) => {
  if (first.length !== second.length) {
    return null;
  }
  first = first.toLowerCase();
  second = second.toLowerCase();
  
  const hash = {};

  for (let letter of first) {
    if (hash[letter]) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }

  let count = 0;

  for (let letter of second) {
    if (hash[letter]) {
      count++;
      hash[letter]--;
    }
  }
  return count;
};

const exactMatch = (first, second) => {
  let count = 0;
  first = first.toLowerCase();
  second = second.toLowerCase();

  for (let i = 0; i < first.length; i++) {
    if (first.charAt(i) === second.charAt(i)) {
      count++;
    }
  }
  return count;
};


// export default game;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = game;
}
