1-What is a "callback"?

A: A "callback" is any function that is called by another function which takes the first function as a parameter.

2-Why is a callback useful?

A: It is useful when we schedule an operation to complete, but do not want the program to stop running until the operation has completed. The program is free to go ahead and do anything else until the work's done and call program back.

3-Give two specific times you would use a callback

A: 1. When adding event listener, we should specify the function to run when the event occurs. 
   2. When we want to run some functions synchronously.

4-What does 'lexical scoping' mean for JS? Give an example.

A: It defines how variable names are resolved in nested functions, the scope of an inner function contains the scope of a parent function.
Example:
let globel = 'this is globel';

function parent() {
  function child() {
    let child = 'this is child';
    console.log(globel + child + parent);
  };
  
  let parent = 'this is always parent';
  child = 'this is parent';
  
  console.log(globel + child + parent);
  child();
};

parent();

5-Assume I am new to JS - explain 'this' to me in your own words

A: 'this' is the object that owns the JavaScript code. Or in other words, 'this' is the 'LEADER' of current object.
    The 'this' reference always refers to an object and it is usually used inside a function or a method, although it can be used outside a function in the global scope.