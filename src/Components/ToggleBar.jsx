import React from 'react';

import classes from './../App.module.css'

const ToggleBar = ({ info }) => {

  const { leftText, rightText, isLeftActive, toggle } = info

  const { toggleContainer, toggleText, activeText } = classes

  return (
    <div className={toggleContainer}>
      <button
        className={`${toggleText} ${isLeftActive ? activeText : null}`}
        onClick={() => toggle('left')}
        >
        {leftText}
      </button>
      <button
        className={`${toggleText} ${isLeftActive ? null : activeText}`}
        onClick={() => toggle('right')}
      >
        {rightText}
      </button>
    </div>
  )
};

export default ToggleBar;