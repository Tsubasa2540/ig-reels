import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" className="app__logo"/>
        <h1>Reels</h1>

      </div>
      <div className="app__videos">
        <VideoCard 
          channel="Channel"
          avatarSrc='me.jpg'
          song='songOK'
          url='mixkit-woman-in-an-amusement-park-2818.mp4'
          likes={103}
          shares={40}
        />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
