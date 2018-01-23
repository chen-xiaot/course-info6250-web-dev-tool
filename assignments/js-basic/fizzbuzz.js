const translate = num => {
  if ( num % 15 === 0 ) {
    return 'fizzbuzz';
  } else if( num % 3 === 0 ) {
    return 'fizz';
  } else if ( num % 5 === 0 ) {
    return 'buzz';
  } else {
    return num;
  }
};


const fizzbuzz = max => {
  const result = [];
  for(let count = 1; count <= max; count += 1 ) {
    result.push(translate(count));
  }
  return result;
};

module.exports = fizzbuzz;
