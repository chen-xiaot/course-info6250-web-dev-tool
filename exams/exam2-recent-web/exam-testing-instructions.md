# Exam 2 - SEA INFO 6250 Fall 2017
## Testing Requirements

You will write unit tests against the non-presentational logic that is in .js files.  These files should have no JSX in them, nor references to HTML, CSS, or any part of the DOM.  

You will NOT (yet) write unit tests against the JSX files or anything presentational.  You will not use Jest or other testing different from our recent work.

You will have to delete the App.test.js file or it will complain when you try to run tests with tape

You will have to replace the test line in package.json - just replace what is there, but only that line.  Do not remove any other content in package.json.

You will have to install the necessary test libraries and make sure package.json lists those dependencies.  

### How to make ES6 js files testable with tape

You may have discovered that if you have import and export statements in your .js files, they work fine in the browser but not at the command-line.

This is because node does not understand import/export.  The browser does not either - create-react-app is passing the code through babel first, which replaces all of those references. You will need to do a similar task:

```
npm install --save-dev babel-tape-runner babel-preset-env
```
create a `.babelrc` file (in the same dir as the react project package.json) that has these contents:
```
{ 
  presets: [ 'env' ]
}
```
Once that is done, the command to run your tests is `babel-tape-runner src/*.test.js`

If it complains about `<App` you didn't delete the App.test.js as mentioned above


