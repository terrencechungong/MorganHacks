import React, { useState, useEffect } from 'react';
import lamejs from 'lamejs';
import run from './mp3-audio.ts'
import uploadFileToS3 from './aws-setup.js'

const AudioRecorder = () => {
  const [audioURL, setAudioURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);


  useEffect(() => {
    // Check for MediaRecorder support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("MediaDevices or getUserMedia not supported in this browser.");
      return;
    }


    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);


        let chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
          const completeBlob = new Blob(chunks, { type: 'audio/mp3' });
          setAudioURL(URL.createObjectURL(completeBlob));
          uploadFileToS3(completeBlob, "test.mp3");
          chunks = [];
        };
      })
      .catch(err => console.error("Error accessing media devices.", err));
  }, []);


  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      mediaRecorder.start();
      setIsRecording(true);
    }
  };


  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
        <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
        {audioURL && <audio src={audioURL} controls />}
      </header>
    </div>
  );
}


 
export default AudioRecorder;
