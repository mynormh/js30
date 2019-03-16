# Lessons

- We accomplish this by creating a new instance of `SpeechSynthesisUtterance()`.

- It's important that our inputs are named the way they are because they will match the properties needed for `SpeechSynthesisUtterance()`.

- The `SpeechSynthesis` object contains the built-in voices of the computer and the browser voices, so we use them to populate our voices dropdown when the object fires up the vent `voiceschanged`.

- Once the voices have loaded we can pass our Utterance instance to the `SpeechSynthesis` object's method `speak()`.

- We get the chosen value from the dropdown by simply using `this.value` on the callback function of our eventListener.

- Since all our options line up with the name of the Utterance instance properties we need to change we can set them with the same line of code: `msg[this.name] = this.value`.

- To send arguments to a callback function in an `.addEventListener()` we can use `callback.bind(null, arg1)`. Or you can use an arrow function that returns the callback function with the argument.
