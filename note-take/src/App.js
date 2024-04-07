import logo from './logo.svg';
import './App.css';
import AudioRecorder from './backend/voice-record.js';
import SimpleForm from './frontend/chat-interface.js';

function App() {
  const handleClick = () => {
    // This function does nothing when the button is clicked
  };

  return (
    <AudioRecorder/>
  );
  
}

export default App;
