import logo from './logo.svg';
import './App.css';
import {FileUploader} from './frontend/input'
import S3DownloadComponent from './backend/get-s3-item.js';
import AudioRecorder from './backend/voice-record.js';
import run from './backend/mp3-audio.ts'

function App() {
  const handleClick = () => {
    // This function does nothing when the button is clicked
  };

  return (
    <AudioRecorder/>
  );
  
}

export default App;
