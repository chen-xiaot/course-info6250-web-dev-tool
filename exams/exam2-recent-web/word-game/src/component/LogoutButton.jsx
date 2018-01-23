import React from 'react';

export const LogoutButton = (props) => {
  return <button className='header-logout' onClick={props.onClick} >Log {props.buttonName} Out</button>
}