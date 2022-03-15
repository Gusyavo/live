import React, { useEffect } from 'react';
import classes from './App.module.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import Chat from './Components/Chat/Chat';
import Video from './Components/Video/Video';
import Promotions from './Components/Promotions/Promotions';
import ToggleBar from './Components/ToggleBar';
import useWindowDimensions from './Hooks/useDimensions';

import { GET } from './api/api'

function App() {

  const state = useSelector(state => state)
  const { showChat, live } = state

  const { vw } = useWindowDimensions();
  const isMobile = vw < 640

  const dispatch = useDispatch()

  const toggleChat = () => dispatch({ type: 'toggleChat' })

  const toggle = (clicked) => {
    if (clicked === 'left' && !showChat) toggleChat()
    if (clicked === 'right' && showChat) toggleChat()
  }

  const toggleInfo = {
    leftText: 'Chat',
    rightText: 'Promociones',
    isLeftActive: showChat,
    toggle
  }

  useEffect(() => {
    const broadcastId = '11e916c3-f5fd-4081-8b73-279efaa9395b'
    GET(`/v1/api/Lives/GetByIBroadCastID/${broadcastId}`).then(res => {
      if (res.success) dispatch({ type: 'setLive', live: res.data })
    })
  }, [dispatch])

  // console.log(window.location.href) // or .pathname

  return (
    <>
      {live && <>
        {isMobile ? (
          <div className={classes.App} >
            <Video />
            <ToggleBar info={toggleInfo} />
            <Chat show={showChat} live={live} isMobile />
            <Promotions isMobile />
          </div>
        ) : (
          <div className={classes.App} >
            <Chat show={showChat} toggle={toggleChat} live={live} />
            <Video live={live} />
            <Promotions />
          </div>
        )}
      </>}
    </>
  );
}

export default App;