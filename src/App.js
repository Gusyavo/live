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
     <video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" controls autoplay width="640" height="400" poster="" data-setup='{}' tabindex="0">
        <source src="//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest" type="application/vnd.ms-sstr+xml" />
    </video>
    </>
  );
}

export default App;