import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';
import classes from './chat.module.css'

import ChatWindow from './Window';
import ChatInput from './ChatInput';
import Button from './Login/Button'
import LoginForm from './Login/LoginForm';

import { POST } from '../../api/api';

const Chat = ({ show, toggle, live, isMobile }) => {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([{
    user: {
      userMSG: {
        name: 'Samsung',
        email: 'rico'
      },
      isBrand: true,
      txtMessage: 'Rico mami',
      reply: {
        UserMSG: {
          name: 'pepe',
          email: 'rico'
        },
        txtMessage: 'Rico papi'
      }
    }
  }]);
  const [isLogged, setIsLogged] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  const latestChat = useRef(null);

  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://dev.api.live.cheil.com.co/livechat', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');
          connection.on('ReceiveMessage', (user, message) => {
            const updatedChat = [...latestChat.current];
            updatedChat.push({ user, message });

            setChat(updatedChat);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const sendMessage = async (message) => {
    const msg = {
      "UserMSG": {
        "name": user.name,
        "email": user.email,
      },
      "txtMessage": message,
      "isBrand": false,
      "reply": null
    }

    try {
      await connection.invoke("SendMessageAsync", msg);
    }
    catch (e) {
      console.log(e);
    }
  }

  const login = () => {

    const body = {
      email: user.email,
      name: user.name,
      liveID: live.liveID
    }

    POST(`/v1/api/LiveUserChat/RegisterChat`, body).then(res => {
      if (res.success) {
        setShowLoginForm(false)
        setIsLogged(true)
      }
    })
  }

  const arrowSrc = show ? require('../../assets/right-arrow.png') : require('../../assets/left-arrow.png')

  const { chatContainer, hideButton, Chat, hidden, hideArrow, title, division, nonDisplay } = classes

  return (
    <div className={`${chatContainer} ${!show && isMobile ? nonDisplay : null}`}>
      {!isMobile &&
        <>
          <button
            className={hideButton}
            onClick={toggle}
          >
            <img className={hideArrow} src={arrowSrc} alt="arrow" />
          </button>
          <label className={title} >Chat</label>
        </>
      }
      <div className={`${Chat} ${show ? null : hidden}`}>
        <div className={division}></div>
        <ChatWindow chat={chat} />
        {showLoginForm && <LoginForm login={login} user={user} setUser={setUser} />}
        {isLogged ? <ChatInput sendMessage={sendMessage} /> : <Button login={() => setShowLoginForm(true)} />}
      </div>
    </div>
  );
};

export default Chat;

