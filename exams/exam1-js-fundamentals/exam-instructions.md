# Exam 1 - SEA INFO 6250 Fall 2017

Clone this project to your local environment and submit your work as a Pull Request to merge _your_ branch of "exam1" to master

Do the work listed for both the *Coding* and *Question and Answer* sections

Please submit your own work

All files should be inside the correct exam-X directory, directly or in subdirectories

Follow the best practices that have been described in class/in code reviews

Particular requirements include but are not limited to:
* Use the letter case requirements for the different conventions in variables, tags, attributes, properties, and filenames.
* Do not include files that are not part of the exam, nor including files and directories that should not be part of a PR such as node_modules/
* Do not make use of libraries that are not included in the exam - No jquery, no bootstrap, no foundation, no Less, no SASS, etc.
* For this assignment, this also means no icon libraries or other sources of packaged CSS, nor google fonts or other external fonts.
* Use semantic structures over non-semantic ones.  
* Do not use table tags.    
* Strive to make maintainable HTML, JS, and CSS.
* `npm install` and `npm start` should do all I need to have this work.
* `npm test` should run the unit tests for me

You *will* have to install testing libraries via npm.  Always install these locally and make sure your package.json was updated.

## Coding

Submit any listed files, doing your best to demonstrate your skill and knowledge.

* Do not use browserify or other bundlers for this assignment

### Default Page

* Create an index.html
* ...that uses styles.css
* ...that includes games.js

* Don't forget that static content files go to some base directory

* The page should use a page-wide sans-serif font
* The page should have a 50px-high maroon-colored banner across the top (regardless of the size of the window)
* The top banner will have white-colored text that says 'Games', and is centered both horizontally and vertically within the maroon banner.
* The main body of the page will have a background color that is light grey in color
* The main body of the page will have a form with a white background and a 1px-wide black solid border with rounded corners
* The form should be centered horizontally on the page, but you should choose an appropriate width
* The form has these fields:
    * A dropdown labeled 'Game' with the values below visible, and actual values for name 'game' that are all-lowercase with spaces replaced by '-'.  e.g. 'League of Legends' would becomes 'league-of-legends'.
        * 'None' - This is selected by default.
        * 'Word Master'
        * 'Tic Tac Toe' - this is greyed out and disabled as an option
    * A dropdown labeled 'Difficulty' with the values below visible, and actual values for name 'diff' that are snake-cased versions of the visible text, as with above, in this order:
        * 'Easy'
        * 'Normal' - selected by default
        * 'Hard'
    * A button labeled 'Play'.  This button is disabled unless a valid game has been selected in the drop down (i.e. currently 'Word Master' is the only valid game) and disables if a non-valid game is selected.
* When the button on the form is pressed (and the button is active) the form should submit to "redirect" (no file extension) as a GET request, with the parameters of 'game' and 'diff' being sent as query parameters along with their values.
* Other than the position and background/border appearance listed above, you should pick other details of the form presentation that make for an attractive form.
* No unit tests expected

When complete and successful, using the included server (npm start) should have:

http://localhost:8000/   

bring up your default page.  Selecting 'Word Master' and pressing 'Play' should send the request described above to the server, which in turn will respond with a redirect to another page.  

### Word Master Game

#### Base files
* Create a word.html
* ...that uses the SAME style.css as the default page. 
* ...Make sure you reuse at least one style definition between both pages.
* ...that uses a 'word.js' file
* The page will have the following areas that you can position and style as you prefer, remembering the best practices:
    * A navigation bar, described in the next section
    * A place to type your guess, along with a button to submit it.
    * A place to list previous guesses, along with the number of correct letters AND the number of exactly correct letter matches
        * A letter matches if it is present anywhere in the word, and does not exceed the number of such letters
        * A letter is an exact match if it is present in the secret word IN THE SAME POSITION
        * These matches are case insensitive
        * Example: If the secret word was 'TREES', than 'BEERS' will have 4 correct letters (REES), and 2 exactly matching (__E_S)
    * A message area to give messages to the user.
    * An area to list the sorted word list for the current difficulty (defaults to Normal, regardless of choice on Default Page)
    * A game status area that includes the current difficulty, the necessary word size, and the number of guesses currently made
* Make your code generally easy to test
* Have unit tests that cover all the letter matching logic
* No tests needed for DOM-changing functions

#### What the page does

You should make it so that the page allows a game following these rules:
* The button to submit is disabled unless waiting for a user to make guess.
* A new game is started by selecting 'New Game' from the menu/nav bar.
* At the start of a game, the game picks a random word from the list for the current active difficulty (defaults to Normal, regardless of choice made on the default page)
* The game has at least the difficulties of 'Easy', 'Normal', and 'Hard'
   * The word list for Easy: [ 'CAT', 'DOG', 'COG', 'PAT', 'HIT', 'PIE', 'PIG', 'DIP']
   * The word list for Normal: [ 'STARS', 'START', 'STRAP', 'PARTS', 'RANTS', 'STAND', 'GUESS', 'TREES', 'GUEST', 'TRAPS', 'GREET']
   * The word list for Hard: [ 'TEASER', 'RESCUE', 'STACKS', 'TRUCKS', 'DUCKED', 'SPIRIT', 'EASIER', 'PANDER', 'STUPOR', 'RUSTED', 'PLANTS', 'STRIPE', 'STRIDE', 'CUSTOM', 'MASKED', 'WREATH', 'STREWN', 'BRUTES', 'BRAINS', 'BEASTS', 'RIBBON', 'HAPPEN', 'NAPPED', 'NIGHTS', 'KNIGHT']
* When an eligible guess is made, the input will blank, and the guess will appear in the list with the number of matches and exact matches, and the turn counter will visibly advance by 1 where displayed.
* When an ineligible guess is made, a message about the invalidity is given in the message area.   Nothing is added to the list of guesses, and the turn count does not increment.
    * Invalid: Not having only letters, having too many or too few letters, matches a previous guess
* If the user wins, the message area will say as much, and the user will be unable to change the input or press the button until a new game is started.
* If anything puts text in the message area, it should clear whenever the user starts typing in the input
* The secret word is never revealed to the user unless/until they win

#### The Navigation menu
* This is a unordered list with these items:
    * Home - links to index.html (no path)
    * New Game - when clicked will reset the game, but not reload the page
    * Difficulty - this contains a SECOND unordered list.  When hovered over the Difficulty button will show a submenu of the three difficulty options (East, Normal, Hard).  The currently selected difficulty is underlined and has a different color/background color.  Clicking one of the unselected difficulties will select that difficulty and start a new game with that difficulty.  Clicking the selected difficulty will NOT restart the game
* Except for converting unordered lists into a horizontal menu (with vertical submenus) the appearance and styling of the nav bar are left to your discretion.

## Question and Answer

Create a file `exam1.md`.  Use Markdown format to list and answer the questions below.

Provide short but complete answers (1-3 sentences).  Be sure to be explicit!  Be very clear about which concept any part of your answer is referring to.

1-What is a "callback"?

2-Why is a callback useful?

3-Give two specific times you would use a callback

4-What does 'lexical scoping' mean for JS?  Give an example.

5-Assume I am new to JS - explain 'this' to me in your own words
