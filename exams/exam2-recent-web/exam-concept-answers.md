# Exam 2 - SEA INFO 6250 Fall 2017

## Questions

### I keep saying to keep functions "dumb", to limit how much they need to know about other functions or how they are being called.  Why?  What benefit does having "dumb" functions offer?

Answer: 

Fizzbuzz game for example:

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

These two functions are 'dumb'. Function 'translate' only knows the rule of game fizzbuzz, meanwhile function 'fizzbuzz' is only responsible for outputing an array of result by calling function 'translate' inside itself.

Separating these two functions into two parts instead of binding them together is better, the reason is that they become more maintainable. If we need to change something, we know where to go. If we change something, we know what will and will not be impacted.

Let's assume we binding them together into one function used to receive a input number to output a result. 
Once it's not working, we would spend more time to find out which part (game rule or result array generating) contains bug. 
Moreover, if we want to reuse the rule of fizzbuzz game somewhere else, we would not allowed to export the binded function since only game rule logic part is needed. But if these two functions are seperated, we could export function 'translate' and import it anywhere we only need the game logic. In addition, testing or changing the logic is easier to do.


### "Once you are asynchronous, you must stay asynchronous until the event loop" - What does this mean?  Give an example of some code that demonstrates this concept.

Answer:

Example:

console.log('one');
setTimeout(function fct() { 
  console.log('three');
}, 1000 );
console.log('two');

The execution result of above codes should be 'one','two','three'.

First things first, Stack is somewhere codes are executed, Queue contains a list of messages to be processed.
The 'event loop' handles the execution of multiple chunks of program over time, each time invoking the JS Engine. The job of 
'event loop' is  to monitor the Stack and the Queue. If the Stack is empty, it will take the first event from the queue and will 
push it to the Stack, which effectively runs it. 

Let's come back to go through the example code.

1. console.log('one') is added to the Stack, console.log('one') is executed, console.log('one') is removed from the Stack.
2. setTimeout(function fct() { ... }) is added to the Stack, setTimeout(function fct() { ... }) is executed, the browser creates 
   a timer going to handle the countdown for you, setTimeout(function fct() { ... }) itself is removed from the Stack.
3. console.log('two') is added to the Stack, console.log('two') is executed, console.log('two') is removed from the Stack.
4. After at least 1s, the timer completes and it pushes the fct() callback to the Queue.
5. The Event Loop takes fct() from the Queue and pushes it to the Stack.
6. fct() is executed and adds console.log('three') to the Stack, console.log('three') is executed, console.log('three') is removed 	   from the Stack, fct() is removed from the Stack.

So once fct() is asynchronous, it must stay asynchronous until it's called back to the Queue and then to the event loop and then to the Stack. At the meantime, other codes are executed in Stack.