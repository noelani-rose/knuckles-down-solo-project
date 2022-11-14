import { Button } from "@mui/material";




function CameraAccess () {


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

      
      
      function startRecording(stream, lengthInMS) {
        let recorder = new MediaRecorder(stream);
        let data = [];
      
        recorder.ondataavailable = (event) => data.push(event.data);
        recorder.start();
        log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);
      
        let stopped = new Promise((resolve, reject) => {
          recorder.onstop = resolve;
          recorder.onerror = (event) => reject(event.name);
        });
      
        let recorded = wait(lengthInMS).then(
          () => {
            if (recorder.state === "recording") {
              recorder.stop();
            }
          },
        );
      
        return Promise.all([
          stopped,
          recorded
        ])
        .then(() => data);
      }
      
      
      function stopRecording(stream) {
        stream.getTracks().forEach((track) => track.stop());
      }




    return (
        <div>
            <Button variant = "contained" onClick = {createVideo}>Camera Access</Button>
            {/* <Button variant = "contained" >Camera Access</Button> */}
            <video autoPlay muted id = 'video'></video>
            <br/>
            <br/>
            <Button variant = "contained" onClick = {stopVideo}>Close Camera</Button>
            {/* <Button variant = "contained">Close Camera</Button> */}
            <br/>
            <br/>
            <button id="start-record"onClick = {startRecording}>Start Recording</button>
            {/* <button id="start-record">Start Recording</button> */}
            <br/>
            <button id="stop-record" onClick = {stopRecording}>Stop Recording</button>
            {/* <button id="stop-record" >Stop Recording</button> */}
            <br/>
            <br/>
            <video id = "recording" width = "160" height = "120" controls></video>
            <br/>
            <button id = "download">Download</button>
            <br/>
            <input type = "file" accept='video, image/png, image/jpeg' capture = 
            "user" />
        </div>
    )
}

export default CameraAccess

