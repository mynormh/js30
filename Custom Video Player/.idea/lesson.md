# Lessons

- We position the controls at the bottom of the player by using a div positioned `absolute` inside the player positioned `relative` and hide them by using `overflow:hidden` on the relative div and `translateY(100%)` on the absolute one. We also show just the tip of the controls by also using `translateY(-5px)`. And show the controls by using `translateY(0)`.

- In a `video` element, there's no play property only `paused`. There are `play()` and `pause()` methods.

- Instead of using the `togglePlay()` function to also update the play button, we use the events `play` and `pause` directly on the video element. In case it's paused from some external source like a plugin.

- Inside the callback function of an `eventListener`, `this` is bound to the element listening for that event.

- We use `data-skip` on the skip buttons, so we can add `data-skip` on any element and it'll work automatically. And instead of adding an event listener on each element manually, we just use a `forEach()` to add the event listener on every element that has a `data-skip`.

- `this.dataset` will return an object with all the properties defined as `data-` in our HTML. In this case `this.data.skip` will return the skip values.

- We use `video.currentTime` to skip time, simply by increasing or decreasing it's value.

- To update the sliders, we set the name property of the HTML element just like they video object properties on JS. This way we can use `this.name` to get the property we are updating and `this.value` to get its value, regardless of what property it actually is.

- To update the progress bar we listen for the `timeupdate` event on the video element, get the current progress percentage using `video.currentTime` and `video.duration` and then we update they flex-basis style by using `progressBar.style.flexBasis`.

- To handle the scrub on the progress bar we listen for the `click` event on the duration bar and use a simple rule of 3 with `e.offsetX` (position of the click), `durationBar.offsetWidth` (total width of the duration bar) and `video.duration` and we update `video.currentTime` to the result value.

- We also listen for the `mousemove` event on the duration bar to drag the scrub, for this we need to only scrub when the mouse is being clicked (otherwise it will scrub everytime we move the mouse over the bar) so we use a `mosueDown` flag and set it to `true` when the `mousedown` event is emitted and false when the `mouseup` event is emitted.
