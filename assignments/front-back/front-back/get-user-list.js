const fetch = require('node-fetch');
const getUserList = arg => {
  return Promise.resolve()
  .then( () => {
    return fetch(`http://sea-info6250-crud.herokuapp.com/users/test`, {
       method: 'GET',
       credentials: 'include',
       headers: { 'Cookie': arg }
    });
  })
  .then( r => r.ok ? r.json() : r.json().then( j => Promise.reject(j) ) )
  .then( j => { console.log(j); return j } )
  .catch( e => console.warn(e) )
};

module.exports = getUserList;