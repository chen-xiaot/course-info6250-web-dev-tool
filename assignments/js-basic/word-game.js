const getRandomInt = (int) => {
	const res = Math.floor(Math.random() * int);
	return res;
};

const match = (first, second) => {
	if (first.length !== second.length) {
		return null;
	}
	const firstLowerCase = first.toLowerCase();
	const secondLowerCase = second.toLowerCase();

	let hash = new Map();
	for (let i = 0; i < firstLowerCase.length; i++) {
		let key = firstLowerCase.charAt(i);
		if (hash.has(key)) {
			hash.set(key, hash.get(key) + 1);
		} else {
			hash.set(key, 1);
		}
	}

	let count = 0;
	for (let i = 0; i < secondLowerCase.length; i++) {
		let key = secondLowerCase.charAt(i);
		if (hash.has(key) && hash.get(key) > 0) {
			count++;
			hash.set(key, hash.get(key) - 1);
		}
	}
	return count;
};

const game = {
	difficulties : {
        'this is silly': ['silly'],
        'easy and dumb': ['easy', 'dumb']
    },
    guessesCount: 0,
    answer: null,

    start: function(diff) {
    	this.guessesCount = 0;
        const diffArr = ['this is silly', 'easy and dumb'];
    	if (!diff) { // no diff level passed in
    		const diffIndex = getRandomInt(diffArr.length);
    		const ansArr = this.difficulties[diffArr[diffIndex]];
    		const ansIndex = getRandomInt(ansArr.length);
    		this.answer = ansArr[ansIndex];
    		return this.answer.length;
    	} else { // a specific diff level passed in
    		const ansArr = this.difficulties[diff];
    		const ansIndex = getRandomInt(ansArr.length);
    		this.answer = ansArr[ansIndex];
    		return this.answer.length;
    	}
    },

    guesses: function() {
        return this.guessesCount;
    },

    guess: function(input) {
    	if(!input || input.length !== this.answer.length) {
            return;
        }
        this.guessesCount++;

        const obj = {
            won: input === this.answer,
            guesses: this.guessesCount,
            matched: match(input, this.answer),
            word: input === this.answer ? input : undefined
        }
        return obj;
    }
};

module.exports = game;
// game.start();
