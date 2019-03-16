# Lessons

- A flex item (inside a flex container) can also be a flex container itself.

- We rely on flexbox's ability to automatically distribute the free space between flex-items. By changing an item's `flex:1` to `flex:5`, we make the item grow 5 times bigger and the rest smaller.

- We use the event `transitionend` to listen for when the `flex-grow` transition has ended, and then we toggle the `.open-active` class to bring in the top and bottom text.
