# Lessons

- If you just listen to the `keyup` event on `window`, we'd just be creating a key logger listening to everything the user types. So we limit the array to only the maximum of keys we'd need for it to match our secret code.

- We only take into account the last series of keys pressed, hence the negative number in `.splice()`.

- We use cornify.js to add random unicorns/rainbows on the screen.
