import React from 'react';
import classes from './login.module.css'

const Button = ({ login }) => {


  return (
    <button
      className={classes.loginButton}
      onClick={login}
    >
      Login
    </button>
  )
};

export default Button;