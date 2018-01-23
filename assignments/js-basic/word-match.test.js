const test = require('tape');
const match = require('./word-match');

test('it is case-insensitive', t => {
	const count = match('Java', 'JAVA');
	t.equal( count, 4 );
	t.end();
});


test('handles different length', t => {
	const count = match('Java', 'JavaScript');
	t.equal( count, null );
	t.end();
});

test('handles different combinations of same letters', t => {
	const count = match('AaBbCc', 'ccbbaa');
	t.equal( count, 6 );
	t.end();
});

test('handles nothing in common', t => {
	const count = match('aa', 'bb');
	t.equal( count, 0 );
	t.end();
});

test('handles empty string', t => {
	const count = match('aa', '');
	t.equal( count, null );
	t.end();
});

test('handles falsy inputs', t => {
	const count = match('', undefined);
	t.equal( count, null );
	t.end();
});

test('handles single input', t => {
	const count = match('');
	t.equal( count, null );
	t.end();
});

