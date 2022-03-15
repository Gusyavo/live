import React from 'react';
import classes from './chat.module.css'

import Message from './Message';
import BrandMsg from './BrandMsg';

const Window = ({ chat }) => {

  return (
    <>
      <div className={classes.window}>
        {chat.map(m => {
          const isBrand = m.user.isBrand
          return isBrand ? (
            <BrandMsg
              key={Date.now() * Math.random()}
              message={m.user}
            />
          ) : (
            <Message
              key={Date.now() * Math.random()}
              message={m.user}
            />
          )
        })}
      </div>
    </>
  )
};

export default Window;