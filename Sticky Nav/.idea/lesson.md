# Lessons

- We use the `scroll` eventListener to check everytime we scroll if we have scrolled beyond the top of the `<nav>`, we do this by using `window.scrollY` and `nav.offsetTop`.

- It's better to pop the class we're gonna add to a top level DOM node (like `<body>`so we can target any of the children through the class name and the respective selector (check in style.css `.fixed-nav nav:{}`), not just the element itself.

- When we make the nav fixed it no longer takes space in the DOM, so the body jumps up to take the space the nav just freed. To fix this "jump up" we have to add the nav height as padding to the body, we can get the nav's height with `nav.offsetHeight`.

- You can't animate the width of something so to animate the logo we use `max-width`.
