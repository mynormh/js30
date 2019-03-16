# Lessons

- The `contenteditable` HTML property makes the content of an element editable.

- Even though we listen for `mousemove` on the hero element, if we hover over the element inside it (`h1` here), the event will give us information from the element inside instead of the hero element. So we have to account for this by adding `offsetLeft` and `offsetTop` to `x` and `y` respectively.

- In the callback of an eventListener, `this` will always be the element we added the eventListener on but `e.target` will be whatever the event was fired from. In this case if we hover over the `h1`, `this` is the hero element and `e.target` the h1 element.

- If the amount of pixels we want the shadow to move `walk` is 100, then we don't want it to go from 100 to 0 since it would only move to the right and bottom. So we make it so it goes from -50 to 50.
