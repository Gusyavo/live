import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import classes from './video.module.css'
import VideoMenu from './VideoMenu';

function Video() {

  const videoRef = useRef(null)
  const videoUrl = useSelector(state => state.live.liveFrontVideoURL)

  console.log(videoUrl)

  return (
    <div className={classes.videoContainer}>
      {/* <source src={require('../../assets/choon.mp4')} />  */}
      <video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" controls autoplay width="640" height="400" poster="" data-setup='{}' tabindex="0">
        <source src="//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest" type="application/vnd.ms-sstr+xml" />
    </video>
      {/* <VideoMenu videoRef={videoRef} /> */}
    </div>
  );
}

export default Video;

