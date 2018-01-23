# Exam 2 - SEA INFO 6250 Fall 2017

Be sure to read the primary instructions first

## Concept questions instructions

Copy this file into `exam-concept-answers.md` and edit that file to contain your answers.  

Delete everything before the 'Questions' header below in your answers file.

Make sure to be precise - if you say 'it' or 'the function' where there are many choices for what you are talking about, I may not see how well you understand.  If I ask about what happens if something is/is not the way it is elsewhere, do not just reverse the answer, explain a different way. (See example)

### Example Question: Give an example of "side effects", describe why they should be minimized, and what general changes in the example would add/remove side effects.

#### Example **BAD** Answer:
Functions can change values, which is a side effect.  If I did not do that it would not be a side effect. I can put it in another function.

Problems:
* Did not explain why a side effect was bad
* Saying: 'If I did not do that it would not be the thing' is not actually saying anything.
* The last sentence probably means a good understanding, but I can't actually be sure of what 'it' is - so this person might get less credit than they deserve for their knowledge.


#### Example Good Answer:  This countMatches() function changes the turn counter:
``` 
 const countMatches = ( guess ) => {
   // stuff before
   turnCount++;
   const secret = getSecretWord();
   // stuff after
 ```
   Changing a value that is not passed in is a side-effect, even more when the function name does not suggest the change.  Side effects can cause strange behavior because you can't tell when values change and what can change them.  In this example, moving the turnCount change to the calling function or to a different countTurns function not called from countMatches().

Successes:
* Explained what a side-effect was and why it was bad (which was part of the question)
* Gave an example (part of the question)
* Said what change in the example would remove the problem, with a little more detail than "stop doing it"

## Questions

### I keep saying to keep functions "dumb", to limit how much they need to know about other functions or how they are being called.  Why?  What benefit does having "dumb" functions offer?

### "Once you are asynchronous, you must stay asynchronous until the event loop" - What does this mean?  Give an example of some code that demonstrates this concept.
