import React, { useState, useRef } from 'react';
import Picker from 'emoji-picker-react'
import classes from './chat.module.css'
import face from '../../assets/face.svg'
import xmark from '../../assets/xmark.svg'
import plane from '../../assets/paper-plane.svg'

const ChatInput = ({ sendMessage }) => {

  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const inputRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== '';

    if (isMessageProvided) {
      sendMessage(message);
      setMessage('')
    }
    else {
      alert('Please insert a message.');
    }
  }

  const onMessageUpdate = (e) => setMessage(e.target.value)
  const onEmojiClick = (_, emojiObject) => {
    setMessage(prev => prev + emojiObject.emoji)
    inputRef.current.focus()
  }


  return (
    <>
      <form onSubmit={onSubmit} className={classes.inputContainer} >
        <input
          className={classes.input}
          type="text"
          id="message"
          name="message"
          placeholder='Escribe un comentario'
          value={message}
          onChange={onMessageUpdate}
          ref={inputRef}
        />
        <button className={classes.sendButton}>
          <img className={classes.plane} src={plane} alt="face" />
        </button>
        <img
          onClick={() => setShowPicker(p => !p)}
          className={classes.face}
          src={showPicker ? xmark : face}
          alt="face"
        />
        {showPicker && <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%', position: 'absolute', bottom: '-1000%' }} />}
      </form>
    </>
  )
};

export default ChatInput;