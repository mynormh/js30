# Lessons

- We use `e.pageY` on the `mousemove` eventListener to get the position of the mouse when hovering over the speed-bar and subtract `this.offsetTop` to get the absolute coordinate in case the speed-bar isn't at the top or there's some other element before it. We then take the percentage the position of the mouse represents and set the speed-bar's height to it.

- In cases like this where we need to use `this` (to get the element position and height) we can't use an arrow function for the eventListener callback since it will use `window` as `this` instead of the element.

- We set a min and max for the playback rate because we don't want it to be 0 for the min (not how playback rate works ) and define a max. We then offset the percentage with these min and max values, and calculate the playback rate for the video `playbackRate` property.
