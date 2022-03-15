import React from 'react';
import classes from './chat.module.css'

const Message = ({ message }) => {

  console.log(message)
  //   "UserMSG": {
  //     "name": "",
  //     "email": ""
  //   },
  //     "txtMessage": "",
  //     "isBrand": false,
  //     "reply": {
  //       "UserMSG": {
  //         "name": "",
  //         "email": ""
  //       },
  //       "txtMessage": ""
  //     }

  return (
    < div className={classes.message}>
      <p><strong>{message.userMSG.name}</strong>: {message.txtMessage}</p>
    </div >
  )
};

export default Message;