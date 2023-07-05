import React from 'react';
import './styles.css';

//TODO: configurar autoPlay
//TODO: configurar el tamaño del video
function VideoPlayer({url}) {
  return (
    <div className='video-player-wrapper'>
      <video  controls className='videoplayer-fit'>
        <source  src={url} type="video/mp4" />
        Tu navegador no admite la reproducción de videos HTML5.
      </video>
    </div>
  );
}

export default VideoPlayer;
