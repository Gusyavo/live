import React from 'react';
import classes from './chat.module.css'

const BrandMsg = ({ message }) => {

  // console.log(message)

  const isReply = message.reply ?? false

  return (
    < div className={classes.brandMsg}>
      <div className={classes.prevInfo}>
        <div>
          <i className="fa-solid fa-reply" style={{width: '0.5rem', height: '0.5rem'}}></i>
        </div>
        <p className={classes.replyLabel}>Respuesta a {message.reply.UserMSG.name}</p>
        <p className={classes.userMsg}>{message.reply.txtMessage}</p>
      </div>
      <p><strong>{message.userMSG.name}</strong>: {message.txtMessage}</p>
    </div >
  )
};

export default BrandMsg;