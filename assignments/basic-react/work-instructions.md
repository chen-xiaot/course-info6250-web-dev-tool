# Basic React

Using create-react-app, make an app to match the requirements below

Be sure to watch which files you are committing!  Please do not commit any node_modules/ files.  You can use `git add -n .` to see what WOULD be added if you ran `git add .`.   If you need to add anything to your .gitignore file, please do so.

## Requirements
* The app should be in a subdirectory of this one named 'tip-calc'
* The app will be a Tip Calculator

### Functional Requirements
* The app will have text input tags for entering a price
* Initially there will be one text input tag
* When a price is entered, an additional input tag is added to the end of the list
* Each input block will have a percentage at the end that matches the selection in the percentage selection
* Each input block will have that percentage of that total displayed after the percentage, with exactly 2 decimal places
* At the top or bottom of the list (your choice), there will be a radio button or dropdown (your choice) with choices of 10%, 15%, 20%, and 30%
* At the bottom of the list there is a total of all the entered prices, and the appropriate tip percentage of that total
* Whenever the chosen percentage is changed, all the tips will recalculate
* Whenever a digit is entered, the tips will recalculate
* If it cannot make a numeric tip, it will not display an error in the console and the screen will make sense (no NaN shown, for example)

### Non-functional Requirements
* Use sensible sub-components - each component should be contained
* There should be no console errors or warnings
* You can use class-based components or function-based components or both
* You should make a good use of the state for each component, including the top level
* You should not have every component using state, only the ones that make sense to
* You should pass callbacks down to sub-components when you need them to modify some state in an ancestor tag

### Appearance

* Other than the items above, you have freedom to play with the design, as long as you do not use outside resources (no other modules, react or not, no outside CSS)
* A screenshot of an EXAMPLE is provided.  You do not need to match this appearance.
