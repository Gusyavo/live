import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from './MenuItem';
import classes from './video.module.css'

import { PUT } from '../../api/api';

function VideoMenu({ videoRef }) {

  const dispatch = useDispatch()
  const live = useSelector(state => state.live)

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (videoRef.current !== document.pictureInPictureElement) {
        await videoRef.current.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleVolume = () => {
    const isMuted = videoRef.current.muted
    videoRef.current.muted = isMuted ? false : true
    dispatch({ type: 'toggleVolume' })
  }

  const sendLike = () => {
    PUT(`/v1/api/Lives/LiveLike/${live.liveID}`).then(res => console.log(res))
  }

  const share = () => {
    PUT(`/v1/api/Lives/LiveShare/${live.liveID}`).then(res => console.log(res))
    navigator.clipboard.writeText(window.location.href)
  }

  const items = [
    {
      label: 'chat',
      onClick: () => dispatch({ type: 'toggleChat' })
    },
    {
      label: 'promotions',
      onClick: () => dispatch({ type: 'togglePromotions' })
    },
    {
      label: 'volume',
      onClick: toggleVolume
    },
    {
      label: 'pip',
      onClick: togglePiP
    },
    {
      label: 'share',
      onClick: () => share,
    },
    {
      label: 'like',
      onClick: sendLike,
    },
  ]

  return (
    <div className={classes.menuContainer}>
      {items.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </div>
  );
}

export default VideoMenu;

