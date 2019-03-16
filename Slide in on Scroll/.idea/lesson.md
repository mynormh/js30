# Lessons

- We check if the image is in view on the `scroll` event of `window`, but if we do it just like that then we'll run into performance issues since that event will fire up a ton of times when we scroll. That's why we `debounce()` it, which basically is a function that receives a callback function and an x amount of milliseconds so `debounce()` will run all the time on `scroll` but it will only execute our callback every x milliseconds.

- Every time you execute a function on an event that fires up a lot of times in a short amount of time, you might wanna `debounce()` it for better performance.

- We check if at least 50% of the image is on screen, if it is then we show it. For that we use `window.scrollY` (amount of pixels we have scrolled vertically), but we want to know the level of where our viewport is (the bottom of the screen) so we add `window.innerHeight` and we also subtract half of the height of each image (remember we want 50% of the image on screen).

- We also want to slide it out once it's left the screen, so we use `offsetTop` to get the amount of pixels the image is at from the top of the screen.

- So we check if we are halfway through the image (`window.scrollY + window.innerHeight - sliderImage.height / 2`) and if we are not completely past the image (`sliderImage.offsetTop + sliderImage.height`), if we are both of those then we show the image if not we hide it.
