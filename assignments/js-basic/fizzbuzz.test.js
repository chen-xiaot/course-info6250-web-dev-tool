const test = require('tape');
const fizzbuzz = require('./fizzbuzz');

test('runs', t => {
  t.ok( fizzbuzz(1) );
  t.end();
});

test('returns array', t => {
  const result = fizzbuzz(0);
  t.deepEquals(result, []);
  t.end();
});

test('returns array with elements === max', t => {
  const max5 = fizzbuzz(5);
  const max101 = fizzbuzz(101);
  t.equals( max5.length, 5);
  t.equals( max101.length, 101 );
  t.end();
});

test('returns numbers', t => {
  const result = fizzbuzz(2);
  t.deepEquals([1, 2], result);
  t.end();
});

test('converts only multiples of 3 to "fizz"', t => {
  const result = fizzbuzz(9);
  t.equals(result[2], 'fizz');
  t.equals(result[5], 'fizz');
  t.equals(result[8], 'fizz');
  const fizzcount = result.join('').split('fizz').length - 1;;
  t.equals(fizzcount, 3);
  t.end();
});

test('converts only multiples of 5 to "buzz"', t => {
  const result = fizzbuzz(10);
  t.equals(result[4], 'buzz');
  t.equals(result[9], 'buzz');
  const buzzcount = result.join('').split('buzz').length - 1;
  t.equals(buzzcount, 2);
  t.end();
});

test('converts multiples of both 3 and 5 to "fizzbuzz"', t => {
  const result = fizzbuzz(90);
  for( index of [14, 29, 44, 59, 74, 89] ){
    t.equals(result[index], 'fizzbuzz');
  }
  t.end();
});


