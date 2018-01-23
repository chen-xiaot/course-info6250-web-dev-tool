# Exam 2 - SEA INFO 6250 Fall 2017

Be sure to check the primary instructions first

See the **exam-ajax-instructions** for more information on making service calls

## Single Page Application: Word-Game

* Use create-react-app to create an application in a directory named 'word-game'
* Create a game using the rules below, which are similar to your previous work, but there are differences
* You may copy and modify any of your previous work for use here, but make sure the end result only has code for this project.

Your application will consist of a single page, with React replacing different components as needed based on state, creating an illusion of multiple pages.  You will use fetch() to talk to a remote server I am supplying to manage user accounts.

### Login/Signup

When someone is not logged in, they only see a "login or sign up" option - they cannot play without being logged in.  They can either log in with an existing username/password, or they can create a new username/password.  You can manage the appearance and detail however you like, but they must have a valid username/password to continue.  

### Logout

If someone is logged in, there will be a link in the upper right of your application to allow them to logout. The link will mention their username, such as "Log Maru Out".  After logout they should not be able to continue playing - show them the login screen or a "you have logged out" screen instead

### Main Page

This will resemble the main page of the previous word-game, without the navigation menu.  You have more freedom to control appearance, as long as you have all the needed elements:

* There is a way to start a new game
* There is a way to set the difficulty.  Changing Difficulty mid-game resets the game.
* The game will display the current difficulty name and length of the words for that game
* You can type in a guess, and on Enter key OR button press, the game will show you the results for that guess.
* When a game is not playing, the user cannot type a guess nor press the button
* When a game IS playing, the user cannot enter more letters than the word length of the game
* The game will display how many turns have been played, and if there is currently a game going on
* The game will display how many legitimate guesses have been played
* The game will display a list of words you have guessed previously in this game
* For each guess, the game will display the two numbers: how many letters match in the word, and how many letters exactly match in the word
* The game will use the same easy/normal/hard word lists as last time though you may add extra lists or words, just don't remove any.

