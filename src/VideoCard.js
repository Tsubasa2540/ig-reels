import React from 'react';
import './VideoCard.css';

function VideoCard() {
  return (
    <div className='videoCard'>
      <video className='videoCard__player' src='mixkit-woman-in-an-amusement-park-2818.mp4' alt='IG reel video' loop={true}/>
    </div>
  )
}

export default VideoCard;
