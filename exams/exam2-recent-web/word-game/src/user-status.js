// This is a pure logic file - it does not require a browser, and does not know any application state
// It does have to pass through babel though, either command-line or with webpack
// Babel will turn the unsupported ES6 features (like export) into something node and/or browser can run

export const login = ( user, password ) => {
  return Promise.resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${user}/session`, {
       method: 'POST',
       body: JSON.stringify({ password: `${password}` }),
       credentials: 'include'
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => { console.warn(e); return e } )
};

export const isLoggedIn = () => {
  return Promise.resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/me`, {
       method: 'GET',
       credentials: 'include'
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => console.warn(e) )
  
};

export const logout = ( user ) => {
  return Promise.resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${user}/session`, {
       method: 'DELETE',
       credentials: 'include'
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => console.warn(e) )
};


export const register = ( user, password ) => {
  return Promise.resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${user}`, {
       method: 'POST',
       credentials: 'include',
       body: JSON.stringify({ password: `${password}` })
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => { console.warn(e); return e } )
};



