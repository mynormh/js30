# Lessons

- data atributes allow us to include necessary data inside our html elemnts.

- We listen to the `keydown` event, get the keyCode from it and get the respective `div.key` and `sound` via their `data-key`. We can then `.play()` to play the sound, and add the playing class to the div.

- We use `audio.currentTime = 0` to rewind the playing sound, so we can press it repeatedly and hear it accordingly.

- If you use a `setTimeOut` with the css transition to remove the class after x time, it can easily go out of sync if someone decides to change the transition time. Instead you can listen on each `div.key` for when a transition ends with `transitionend`. This fires a lot of transitions (e.g. all the borders), so we pick one, in this case `transform`.
