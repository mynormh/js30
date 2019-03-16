# Lessons

- For security reasons we need a trusted origin (https, localhost) to access the user's microphone.

- `recognition.interimResults = true` makes it so it populates the `div` as we speak, if it's not set to `true` we have to stop speaking before it populates it.

- As the SpeechRecognition API analyzes every sentence we say, it'll build up more confidence and correct previous alternatives.

- The SpeechRecognition API returns a list with a lot of information, so we make it an array and from there we map over it to get the text representing what the API heard us say.

- The first time the `result` event runs, it'll stop listening for it once we stop talking. So we also listen for the `end` event and just start the SpeechRecognition again.
