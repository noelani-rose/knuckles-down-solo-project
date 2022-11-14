import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';


const constraints = {
  video: true,
  audio: true,
    acingMode: 'enviornment'
  }


function createVideo(){
  let All_mediaDevices=navigator.mediaDevices
  if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
     console.log("getUserMedia() not supported.");
     return;
  }
  All_mediaDevices.getUserMedia(constraints)
  .then(function(vidStream) {
     var video = document.getElementById('video');
     if ("srcObject" in video) {
        video.srcObject = vidStream;
     } else {
        video.src = window.URL.createObjectURL(vidStream);
     }
     video.onloadedmetadata = function(e) {
        // video.play();
     };
  })
  .catch(function(e) {
     console.log(e.name + ": " + e.message);
  });
}


const stopVideo = () =>{
  let stream = video.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
  video.srcObject = null;
}

let startBtn = document.getElementById('start-record');
let stopBtn = document.getElementById('stop-record')


function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <LogOutButton className="btn" />
      <br/>
    
      <Button variant = "contained" onClick = {createVideo}>Camera Access</Button>
      <video autoPlay id = 'video'></video>
      <br/>
      <br/>
      <Button variant = "contained" onClick = {stopVideo}>Close Camera</Button>
      <br/>
      <button id="start-record">Start Recording</button>
      <button id="stop-record">Stop Recording</button>
      <br/>
      <br/>
      <input type = "file" accept='video, image/png, image/jpeg' capture = 
      "user" />

    </div>

  );
}

// this allows us to use <App /> in index.js
export default HomePage;
