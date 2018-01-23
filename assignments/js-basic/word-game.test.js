// DO NOT _REMOVE_ OR CHANGE ANYTHING FROM THIS FILE
// You MAY _add_ code to it

const test = require('tape');
const game = require('./word-game');

test('loads a new game', t => {
  game.start();
  t.end();
});

test('it returns the length of the words in the list for the indicated difficulty', t => {
  // These are demo difficulties for testing
  // 'this is silly' difficulty will load a list of one word: silly
  // 'easy and dumb' difficulty will load a list of two words: easy, dumb
  let wordLength;
  wordLength = game.start('this is silly');
  t.equal(wordLength, 5);
  wordLength = game.start('easy and dumb');
  t.equal(wordLength, 4);
  t.end();
});

test('it tells you the number of matching letters', t => {
  game.start('this is silly');
  const turn = game.guess('quest');
  t.equal(turn.matched, 1);
  t.equal(turn.won, false);
  t.equal(turn.word, undefined);
  t.end();
});

test('it is case-insensitive', t => {
  game.start('this is silly');
  t.equal(game.guess('sally').matched, 4);
  t.equal(game.guess('SALLY').matched, 4);
  t.equal(game.guess('SaLlY').matched, 4);
  t.end();
});

test('it counts turns', t => {
  game.start('this is silly');
  t.equals(game.guesses(), 0);
  game.guess('aaaaa');
  t.equals(game.guesses(), 1);
  game.guess('bbbbb');
  t.equals(game.guesses(), 2);
  t.end();
});

test('it handles no matches', t => {
  game.start('this is silly');
  t.equal(game.guess('abcll').matched, 2);
  t.end();
});

test('it handles too duplicate', t => {
  game.start('this is silly');
  t.equal(game.guess('lllll').matched, 2);
  t.end();
});

test('it handles different letters matching', t => {
  game.start('this is silly');
  t.equal(game.guess('shall').matched, 3);
  t.end();
});

test('it rejects and does not count bad length words', t => {
  game.start('this is silly');
  t.equal(game.guess('sill'), undefined);
  t.equal(game.guess('sillyy'), undefined);
  t.equal(game.guess(), undefined);
  t.equal(game.guesses(), 0);
  t.end();
});

test('it handles near matches', t => {
  game.start('this is silly');
  const turn = game.guess('yills');
  t.equal(turn.matched, 5);
  t.equal(turn.won, false);
  t.end();
});

test('it handles matches', t => {
  game.start('this is silly');
  game.guess('wrong');
  const result = game.guess('silly');
  t.equal(result.guesses, 2);
  t.equal(result.won, true);
  t.equal(result.word, 'silly');
  t.end();
});

test('it has multiple words in lists', t => {
  const has = {};
  let count = 0;
  while(count < 100 && !( has.easy && has.dumb ) ) {
    game.start('easy and dumb');
    has.easy = has.easy || game.guess('eays').matched === 4;
    has.dumb = has.dumb || game.guess('dubm').matched === 4;
    count += 1;
  }
  t.ok( count < 100 );
  t.end();
});


