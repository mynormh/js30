# Lessons

- The way this work is we pinpoint the location of where we first click with the mouse (taking into account the position of the div relative to the page) and then calculate the amount of scroll and assign it to the scroll-x of the div. To do this we use `e.pageX` and `slider.offsetLeft`.

- We use `e.preventDefault()` in the `mousemove` event to avoid stuff like text selection.

- If we just assign the scroll distance in the `mousemove` event it will scroll to the right when we move the mouse to the right (same with left) so not really a drag and scroll effect, and it will also reset the scroll after the first time. So we need to subtract it to the distance it has been scrolled on `mousedown`, with this it will scroll right when we move the mouse to the left, and scroll left when we move the mouse to the right.
