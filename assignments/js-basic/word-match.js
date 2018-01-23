const match = (first, second) => {
	if (!first || !second) {
		return null;
	}

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

module.exports = match;
