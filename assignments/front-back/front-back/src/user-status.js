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

export const getUserList = ( username, token ) => {
  return Promise.resolve()
  .then( () => {
    return fetch(`/user-list`, {
       method: 'POST',
       body: JSON.stringify({ 'token': `userToken=${token}` , 'username': username }),
       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => console.warn(e) )
};