# Exam 3 - Questions and Answers about Modern Web Concepts

## 3 defining traits of a REST api are the URL indicating a resource, the use of HTTP methods, and the use of HTTP Status codes.  Explain what each of these are and how REST usage is different from a non-REST usage for each of these 3 traits.

URL:
  REST: URL is indicating a resource
  non-REST: URL is not only indicating a resource but also contains methods

HTTP methods:
  REST: URLs identify resources, and using HTTP methods (GET, POST, PUT, PATCH and DELETE) to do stuff to resources.
        Example: GET /users/{userId}, POST /users
  non-REST: Example: POST /users/getUser, POST /users/creatUser

HTTP Status codes:
  REST: standarlize each status code, for example: 404 -> resource not found
  non-REST: for example: 404 -> not found


## Debugging is a key skill in programming.  List 3 ways you have done debugging, and the benefits of each of them.

1: console.log() method. It's super convenient, and could be put anywhere(exclude render part in React) needed to display JavaScript
values in the debugger window. Whenever I have doubts of some values, I would use console.log() right beneath.

2: Setting Breakpoints. console.log() only display values but code still runs. Setting breakpoints can let JavaScript stop executing at specifice breakpoints, so we could examine JavaScript values. After that, we could resume the code or set other breakpoints.

3: Firebug. Can be used to debug in not only JavaScript but also HTML and CSS.


## Imagine some computerized voting software.  Give an example of how it might work with a separation of presentation and business logic vs a way it might work without such separation.  What are the benefits of each way of doing it?

With a separation of presentation and business logic:
  People who are responsible for presentation part (maybe they do not know how to write business logic) and people who are in charge of business logic (maybe they do not know how to design the user interface) can use their best skills and tools to desgin the software separately, and integrate two parts in the end. 
  The benefits: 
    1. Both two parts(presentation and business logic) can be reused in other projects, or the presentation part can be changed without impacting logic part.
    2. More efficient. Since people are only in charge of their most familiar parts, they do not need to worry about learning new skill set to get job done. And the software has great presentation part as well as logic part.

Without a separation of presentation and business logic:
  Programmers need to take care of both parts. And the presentation part is for the specific logic part only, it is difficult to reuse each part in other projects.
  The benefits:
    1: Once the requirement is changed, it's more easy to adjust both part. Since programmers take care of both part, they know what codes in presentation part need to be adjusted once they changed the logic. For example, if the voting rule changed: people can vote for more than one option rather than only one option, both part needed to be adjusted. The original presentation part is not suitable for new logic anymore.

## The below code will always print "end of function" BEFORE it prints anything else.  Why?  What change would I make if I wanted the "end of function" message to print out only after the "handling stuff" message?

```
const makeVow = () => {
  let vow = {};
  vow.promise = new Promise( (resolve, reject) => {
    vow.resolve = resolve;
    vow.reject = reject;
  });
  return vow;
};

const vow = makeVow();
setTimeout( vow.resolve, 0);
vow.promise.then( () => {
  console.log('handling stuff');
})
.catch( e => console.warn(e) );
console.log('end of function');

```

Because promise and setTimeout are both in asynchronous queue, but console.log('end of function') is not. So console.log('end of function') could be executed at first.

Change to:
```
const makeVow = () => {
  let vow = {};
  vow.promise = new Promise( (resolve, reject) => {
    vow.resolve = resolve;
    vow.reject = reject;
  });
  return vow;
};

const vow = makeVow();
setTimeout( vow.resolve, 0);
vow.promise.then( () => {
  console.log('handling stuff');
})
.then(() => console.log('end of function') )
.catch( e => console.warn(e) );

```

## The below code sample has a high degree of coupling.  Point out at least 1 way there is coupling, describe what you would do to decouple this in a useful way, and say why it is useful to decouple this example.

You can make assumptions about the passed values and usage, just make sure to describe any assumptions.

```
const UserMenu = ({ setNav, username, userIsLoggedIn, onLogin }) => {
  const goToProfile = () => setNav('profile');
  const goToOrders = () => setNav('orders');
  const goToSettings = () => setNav('settings');
  const goToLogin = () => {
    if(onLogin) {
      onLogin();
    } else {
      setNav('login');
    } 
  }

  return userIsLoggedIn ? (
    <div class="user-menu">
      <p class >Hello, {username}</p>
      <ul class="user-menu">
        <li><a href="#profile" onClick={goToProfile}>Profile</a></li>
        <li><a href="#orders" onClick={goToOrders}>Orders</a></li>
        <li><a href="#settings" onClick={goToSettings}>Settingss</a></li>
      </ul>
    </div>
  ) : ( 
    <div class="user-menu">
      <p class="user-menu-name" onClick={goToLogin}>Log In</p>
    </div>
};

```

The two divs with class="user-menu" could be decoupled into two components: HomePage and LoginPage. The reason to do that is decoupling in this way makes codes maintainable. Both components could be reused in other places. The modified code is listed below:

```
const UserMenu = ({ setNav, username, userIsLoggedIn, onLogin, HomePage, LoginPage }) => {
  const goToProfile = () => setNav('profile');
  const goToOrders = () => setNav('orders');
  const goToSettings = () => setNav('settings');
  const goToLogin = () => {
    if(onLogin) {
      onLogin();
    } else {
      setNav('login');
    }
  }

  return userIsLoggedIn ? 
    <HomePage username={username} goToProfile={goToProfile} goToOrders={goToOrders} goToSettings={goToSettings} />
   : 
    <LoginPage goToLogin={goToLogin} />
};

export const HomePage = (props) => {
  return (
    <div className="user-menu">
      <p class >Hello, {props.username}</p>
      <ul className="user-menu">
        <li><a href="#profile" onClick={props.goToProfile}>Profile</a></li>
        <li><a href="#orders" onClick={props.goToOrders}>Orders</a></li>
        <li><a href="#settings" onClick={props.goToSettings}>Settingss</a></li>
      </ul>
    </div>
  )
};

export const LoginPage = (props) => {
  reutn (
    <div className="user-menu">
      <p className="user-menu-name" onClick={props.goToLogin}>Log In</p>
    </div>
  )
};

```

I could continue decoupling 3 <li>s. I could use an array to store objects which contains "href" and onclick methods. Using .map function to go through each object and generate a <li>, and using index to identify each href and onclick function.
For example:
obj1 {
  'name': 'Profile',
  'href': '#profile',
  'onClick': goToProfile
}
obj2 {
  'name': 'Orders',
  'href': '#orders',
  'onClick': goToOrders
}
obj3{
  'name': 'Settings',
  'href': '#settings',
  'onClick': goToSettings
}
array = [obj1, obj2, obj3]
(Objects can be generated by a function)
array.map( (content, index) => { return <li key={index}><a href={content.href} onClick={content.onClick}></a>{content.name}<li> } )

## In the below code, explain why the listed unexpected results are happening and how you would fix them.

```
fetch('example.com/data')
.then( response => console.log(response) )
.then( response => response.json() )
.then( json => handleStuff(json) ) // A
.catch( err => console.warn(err) ) // B
.then( () => console.log('fetch was successful') ); // C
```
A: handleStuff is never passed any value.  Why?   How to fix?

Because in the first then(), it just prints out the response, console.log(response) does not return a response which can be used in the next then().

Change to:
```
.then( response => {
  console.log(response)
  return response
})
```

B: The console.warn() is not called when the service returns a 404.  Why?  How to fix?

Because when the server returns a 404, the 404 is considered as a response, we need to check the response status.

Change to:
```
.then( response => {
  if (response.status.toString().charAt(0) === '4') return Promise.reject(response)
  else return response.json()
})
```

C: The 'fetch was successful' message appears even when there is no internet connection and an error is shown by console.warn().  Why?  How to fix it?

Because code // B will return an undefined to code // C, code // C will still be executed.
We can move //B: .catch( err => console.warn(err) ); at the end of the code.


## Imagine I pull up Chrome on my laptop and go to http://home.example.com/.  The webserver at home.example.com will access http://service1.example.com to dynamically generate the initial HTML for a Single Page Application.  When I click a button on the SPA, a call is made to http://service2.example.com/.  The SPA sends results of the service2 call in a call to http://home.example.com/endpoint, which returns some data that is displayed on my screen.  List every HTTP connection and say what system is the client and which system is the server for each connection.

1. GET, laptop is client, http://home.example.com/ is server
2. GET, http://home.example.com/ is client, http://service1.example.com is server
3. UNKNOWN method, laptop is client, http://service2.example.com/ is server
4. UNKONWN method, http://service2.example.com/ is client, http://home.example.com/endpoint is server
