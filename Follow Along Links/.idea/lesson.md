# Lesson

- The way this works is by appending a `<span>` to the DOM that will act as the highlighter and then when we hover over a trigger element (i.e. anchor tags) we update the width, height, and position of the span to match the trigger element. Using transitions for when it moves.

- We listen for the `mouseover` event on every trigger and execute our function everytime it fires up.

- Using `this.getBoundingClientRect()` we can get all the information on where on the page the element is and it's width and height.

- If we scroll down, the highlight will start to act up because it won't take into account the distance we have scrolled. So we get the vertical and horizontal scroll data and add them to the coordinates.
