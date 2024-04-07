import assemblyai as aai

aai.settings.api_key = "c310cbe05a8543ab8ef2477613ee09e8" 

# transcriber = aai.Transcriber()

# audio_url = ("C:\\Users\\shane\\OneDrive\\Desktop\\MorganHacksFiles\\TakeNote\\Properties of Functions - Even vs Odd (Precalculus - College Algebra 8).mp3")

# config = aai.TranscriptionConfig(speaker_labels=True)

# transcript = transcriber.transcribe(audio_url, config)

# print(transcript.text)

# for utterance in transcript.utterances:
#     print(f"Speaker {utterance.speaker}: {utterance.text}")

#Real time transcription


def on_open(session_opened: aai.RealtimeSessionOpened):
    print("Session ID:", session_opened.session_id)


def on_data(transcript: aai.RealtimeTranscript):
    if not transcript.text:
        return

    if isinstance(transcript, aai.RealtimeFinalTranscript):
        print(transcript.text, end="\r\n")
    else:
        print(transcript.text, end="\r")


def on_error(error: aai.RealtimeError):
    print("An error occured:", error)


def on_close():
    print("Closing Session")

transcriber2 = aai.Transcriber()


transcriber = aai.RealtimeTranscriber(
    sample_rate=16_000,
    on_data=on_data,
    on_error=on_error,
    on_open=on_open,
    on_close=on_close,
)

transcriber.connect()


microphone_stream = aai.extras.MicrophoneStream(sample_rate=16_000)
transcriber.stream(microphone_stream)

transcriber.close()