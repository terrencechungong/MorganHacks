// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai

import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({
  apiKey: 'c310cbe05a8543ab8ef2477613ee09e8',
});

const FILE_URL =
  'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

// You can also transcribe a local file by passing in a file path
// const FILE_URL = './path/to/file.mp3';

// Request parameters 

const run = async (file_name) => {
  const transcript = await client.transcripts.create({audio_url: file_name});
  console.log(transcript.text);
};



export default run;