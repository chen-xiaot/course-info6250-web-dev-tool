(() => {
  const game = window.game;

  const input = document.getElementById('guess-input');

  const guessBtn = document.getElementById('submit');

  const newGameBtn = document.getElementById('newgamebtn');

  const messageBox = document.getElementById('message');

  const wordList = document.getElementById('word-list');

  const gameDescription = document.getElementById('game-status').children;

  const diffListWrap = document.getElementById('diff-list');

  const diffList = document.getElementsByClassName('diff');

  const prevGuessList = document.getElementById('prev-guess');

  input.addEventListener('input', e => {
  	guessBtn.disabled = !e.target.value;
  });

  guessBtn.addEventListener('click', e => {
  	checkInput(input.value);
  	guess(input.value);
  	input.value = '';
  	guessBtn.disabled = true;
  });

  newGameBtn.addEventListener('click', e => {
    startGame(diff);
  });

  let diff = 'normal';

  diffListWrap.addEventListener('click', (e) => {
  	if (e.target && e.target.tagName === 'LI' && e.target.dataset.diff != diff) {
  	  diff = e.target.dataset.diff;
  	  startGame(diff);
  	  changeSelectedDiffStyle(diff);
  	}
  });

  startGame(diff);

  function startGame(diff) {
    game.start(diff);
    reset();
  	setGameStatus(diff, game.answer.length);
  	showAnswerList(game.difficulties[diff]);
  }

  function reset() {
  	prevGuessList.innerText = '';
  	input.value = '';
  	guessBtn.disabled = true;
  	message('');
  	lockInput(false);
  	setGuessTimes(0);
  }

  function guess(guessInput) {
    const guessReturnedObj = game.guess(guessInput);
    if (guessReturnedObj) {
      listPrevGuess(guessInput, guessReturnedObj.matched, guessReturnedObj.exactMatched);
      setGuessTimes(guessReturnedObj.turns);

      if (guessReturnedObj.win) {
        message('Win! The answer is: ' + guessReturnedObj.theAnswer + ' please restart game or select other game levels');
        lockInput(true);
      }
    }
  }

  function message(msg) {
    messageBox.innerText = msg;
  }

  function lockInput(isLocked) {
  	input.disabled = isLocked;
  }

  function setGuessTimes(count) {
  	gameDescription['guess-times'].innerText = "Guesses Times: " + count;
  }

  function setGameStatus( diff, size ) {
    gameDescription['difficulty'].innerText = "Difficulty: " + diff;
    gameDescription['word-length'].innerText = "Word size: " + size;
  }

  function showAnswerList(answers) {
    const sorted = [...answers].sort();
    wordList.innerText = '';
    sorted.forEach(e => {
      let li = document.createElement('li');
      li.innerText = e;
      wordList.appendChild(li);
    });
  }

  function listPrevGuess(inputWord, match, exactMatch) {
  	const li = document.createElement('li');
  	li.innerText = 'input: ' + inputWord + ' correct letters: ' + match + ' exactly matching: ' + exactMatch;
  	prevGuessList.appendChild(li);
  }

  function checkInput(inputValue) {
    if (!inputValue) {
      message('please enter input')
    }
    const letters = /^[A-Za-z]+$/;
    if (!inputValue.match(letters)) {
      message('inputs can only contain letters (A-Z a-z)');
    }

    inputValue = inputValue.toUpperCase();
    if (inputValue.length !== game.answer.length) {
      message('please enter exact ' + game.answer.length + ' letters');
    }

    if (game.prevGuesses.includes(inputValue)) {
      message('no duplicate input allowed');
    }
  }

  function changeSelectedDiffStyle(diff) {
    console.log(diffList)
  	Array.from(diffList).forEach(e => {
  		e.classList.remove('diff-selected');//Note: Removing a class that does not exist, does NOT throw an error.
      e.dataset.diff === diff && e.classList.add('diff-selected');
  	});
    // diffList[diff] && diffList[diff].classList.add('diff-selected');
  }

})();