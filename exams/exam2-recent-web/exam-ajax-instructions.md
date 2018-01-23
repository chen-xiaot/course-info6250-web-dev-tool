# Exam 2 - SEA INFO 6250 Fall 2017

Be sure to check the primary instructions first.

This file is completely informational with details to help you fulfill **exam-coding-instructions**

## Service Calls (AJAX)

There are a number of service calls involved in this application.  You should use fetch() to perform the calls and use the results.  Often is useful to try out calls in the console to see what happens. After a call in the console, you can examine the results there in in the Network tab.

**Take note** that you will need to pass `credentials: 'include'` to fetch() or your app will be unable to login, like the examples below do.

I have included sample calls to show you how to talk to this service.  You can use these as a basis for your actual calls, but these have very little error-handling and do nothing useful with the results, so you will have to make changes. **Error handling will have to be added**

This service returns JSON on success or error - not all services will - and expects JSON as the body of the request when relevant. Remember that JSON is text that can be converted to an object, so when you send data you will want to send the results of JSON.stringify();


### Slow and limited service

This service goes to sleep if it is not in use, so the first request made to it will take 5-15 seconds to spin up.  After that they should be much faster.

It cannot be run 24 hours a day - there is a mandatory minimum amount of time it must sleep - and there is a limited amount of time it can run for the month.  There should be plenty, but please don't write infinite loops that will grind it to a halt.  

### Is a user logged in?
```
fetch('//sea-info6250-crud.herokuapp.com/users/test/me',{
  method: 'GET',
  credentials: 'include'
})
.then( response => response.ok 
  ? response.json() 
  : response.json().then( err => Promise.reject(err)) )
.then( json => console.log(json) )
.catch( err => console.warn(err) );
```
Not logged in: `{ "error": "no-valid-session" } `

Logged in: `{ "status": "user-session-valid", "username": "USERNAME" }`

### Create a new account (also logs you in)
```
fetch('//sea-info6250-crud.herokuapp.com/users/test/USERNAME',{
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify({ password: 'PASSWORD' })
})
.then( response => response.ok 
  ? response.json() 
  : response.json().then( err => Promise.reject(err)) )
.then( json => console.log(json) )
.catch( err => console.warn(err) );

```
On successful creation: `{username: "foo", status: "user-created", token: "gibberish"}`

Note: Be careful to handle errors where a username is already taken!

### Login to existing account
The difference from create is at the end of the url

```
fetch('//sea-info6250-crud.herokuapp.com/users/test/USERNAME/session',{
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify({ password: 'PASSWORD' })
})
.then( response => response.ok 
  ? response.json() 
  : response.json().then( err => Promise.reject(err)) )
.then( json => console.log(json) )
.catch( err => console.warn(err) );

  ```
On successful login: `{username: "foo", status: "login-successful", token: "gibberish"}`

### Logout of existing account
```
fetch('//sea-info6250-crud.herokuapp.com/users/test/USERNAME/session',{
  method: 'DELETE',
  credentials: 'include'
})
.then( response => response.ok 
  ? response.json() 
  : response.json().then( err => Promise.reject(err)) )
.then( json => console.log(json) )
.catch( err => console.warn(err) );
```

On successful logout: `{username: "foo", status: "logout-successful", hint: "stuff to ignore for now"}`

