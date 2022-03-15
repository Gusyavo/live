import React from 'react';
import classes from './login.module.css'

const LoginForm = ({ login, user, setUser }) => {

  const { name, email } = user

  const onSubmit = (e) => {
    e.preventDefault();
    login()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={onSubmit} className={classes.loginContainer} >
      <input
        className={classes.loginInput}
        type="text"
        id="message"
        name="name"
        placeholder='nombre'
        value={name}
        onChange={handleChange} />
      <input
        className={classes.loginInput}
        type="email"
        id="message"
        name="email"
        placeholder='email'
        value={email}
        onChange={handleChange} />
      <button
        className={classes.loginButton}
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;