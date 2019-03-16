# Lessons

- The way this works is similar to the follow along links demo, we have a div that will move and adjust to the nav items.

- We use the events `mouseenter` and `mouseleave` to detect when we hover on each of the nav items and when we leave, respectively.

- To show `div.dropdownBackground` you can't go from both `opacity: 0, display: none` to `opacity: 1, display: block` at the same time because it would just show the item immediately (like a blink), that's why we delay the opacity change with a `setInterval(..)` so that we can see it transition and slowly show up.

- We use `getBoundingClientRect()` to get the information of the dropdown being hovered, including position, width and height. And with this information, along with the coordinates of the nav (to take into account where the nav is, in case there are elements above it in the DOM), we adjust the background div.

- One problem we run into by delaying the opacity change is that if we move quickly between nav items, there will be times where it adds the the class (in `handleEnter()` with the interval) after we are no longer hovering the item. So we add the opacity change only if the item already has the class that changes the display.
