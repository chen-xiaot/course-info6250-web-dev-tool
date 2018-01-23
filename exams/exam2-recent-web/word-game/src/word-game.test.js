const test = require('tape');
const game = require('./word-game');

test('loads a new game', t => {
  game.start('normal');
  t.end();
});

test('it returns the length of the words in the list for the indicated difficulty', t => {
  let wordLength;
  wordLength = game.start('easy');
  t.equal(wordLength, 3);
  wordLength = game.start('normal');
  t.equal(wordLength, 5);
  wordLength = game.start('hard');
  t.equal(wordLength, 6);
  t.end();
});

test('it tells you the number of matching letters', t => {
  game.start('silly');
  const turn = game.guess('quest');
  t.equal(turn.win, false);
  t.equal(turn.turns, 1)
  t.equal(turn.matched, 1);
  t.equal(turn.exactMatched, 0);
  t.equal(turn.theAnswer, undefined);
  t.end();
});

test('it is case-insensitive', t => {
  game.start('silly');
  t.equal(game.guess('SaLlY').matched, 4);
  t.end();
});

test('it counts turns', t => {
  game.start('silly');
  t.equals(game.guesses(), 0);
  game.guess('aaaaa');
  t.equals(game.guesses(), 1);
  game.guess('bbbbb');
  t.equals(game.guesses(), 2);
  t.end();
});

test('it handles no matches', t => {
  game.start('silly');
  t.equal(game.guess('abcll').matched, 2);
  t.end();
});

test('it handles two duplicate', t => {
  game.start('silly');
  t.equal(game.guess('lllll').matched, 2);
  t.end();
});

test('it handles different letters matching', t => {
  game.start('silly');
  t.equal(game.guess('shall').matched, 3);
  t.end();
});

test('it handles near matches', t => {
  game.start('silly');
  const turn = game.guess('yills');
  t.equal(turn.matched, 5);
  t.equal(turn.exactMatched, 3);
  t.equal(turn.win, false);
  t.end();
});

test('it handles exact matches', t => {
  game.start('silly');
  const turn = game.guess('silly');
  t.equal(turn.turns, 1);
  t.equal(turn.win, true);
  t.equal(turn.theAnswer, 'SILLY');
  t.equal(turn.matched, 5);
  t.equal(turn.exactMatched, 5);
  t.end();
});

test('it rejects and does not count bad length words', t => {
  game.start('silly');
  t.equal(game.guess('sill'), undefined);
  t.equal(game.guess('sillyy'), undefined);
  t.equal(game.guess(), undefined);
  t.equal(game.guesses(), 0);
  t.end();
});

test('it rejects and does not count inputs including numbers or characters other than letters', t => {
  game.start('silly');
  t.equal(game.guess('12345'), undefined);
  t.equal(game.guess('*&^%)'), undefined);
  t.equal(game.guesses(), 0);
  t.end();
});

test('it rejects duplicate inputs', t => {
  game.start('silly');
  const turn = game.guess('super');
  t.equal(turn.matched, 1);
  t.equal(turn.exactMatched, 1);
  t.equal(turn.turns, 1);
  const duplicate = game.guess('super');
  t.equal(duplicate, undefined);
  t.end();
});

test('it has multiple words in lists', t => {
  const has = {};
  let count = 0;
  while(count < 100 && !( has.easy && has.dumb ) ) {
    game.start('easydumb');
    has.easy = has.easy || game.guess('eays').matched === 4;
    has.dumb = has.dumb || game.guess('dubm').matched === 4;
    count += 1;
  }
  t.ok( count < 100 );
  t.end();
});


