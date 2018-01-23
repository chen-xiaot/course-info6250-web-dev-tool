// YOU SHOULD EDIT THIS FILE
// Make the related tests pass

const counter = ( corpus, toCount ) => {
	let count = 0;
	for (let i = 0; i < corpus.length; i++) {
		if (corpus.charAt(i) === toCount) {
			count++;
		}
	}
	return count;
};
module.exports = counter;
