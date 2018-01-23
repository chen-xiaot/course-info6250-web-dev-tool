# Front-End / Back-End Distinctions

1) Create a react app and move the contents to be in this directory.   Do any new npm install needed for the app to work.

2) Create a login box in your react app that will login to the test appkey on the heroku service.  Make sure it displays what username is logged in.

3) Create an express server that serve up the "build" directory, as well as a /api endpoint for POST

4) Build the react page to be served by the express server

5) Make the express server run on "npm run server"

6) Have the server /api endpoint expect a username and token as input

7) Have the server /api endpoint use the username and token to request the list of users from the heroku api (GET /users/test/)
    - Note this will require you to use node-fetch AND set a cookie on the request

8) Have the server /api endpoint send the list of users as a response

9) Have the react app call the /api endpoint after successful login

10) Have the react app display the list of users after calling the /api endpoint
