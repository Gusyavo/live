import React from 'react';
import { useSelector } from 'react-redux';
import classes from './video.module.css'

import { icons } from './icons';

const MenuItem = ({ item }) => {
  const { label, onClick } = item

  const state = useSelector(state => state)

  const { showChat, showPromotions, isMuted } = state

  let icon = undefined
  switch (label) {
    case 'chat':
      icon = showChat ? icons[label].active : icons[label].inactive
      break;
    case 'promotions':
      icon = showPromotions ? icons[label].active : icons[label].inactive
      break;
    case 'volume':
      icon = isMuted ? icons[label].inactive : icons[label].active
      break;
    case 'pip':
      icon = icons[label]
      break;
    case 'share':
      icon = icons[label]
      break;
    case 'like':
      icon = icons[label]
      break;
    default:
    // code block
  }

  return (
    <div
      className={classes.menuItem}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}

export default MenuItem;

