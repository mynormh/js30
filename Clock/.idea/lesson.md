# Lessons

- If you rotate an HTML element `transform: rotate(90deg)` it'll rotate from the center, but if you also modify the transform-origin it can rotate from the edges: `transform-origin: 100%`

- We converted time(seconds, minutes, hours) to degrees with a simple rule of 3, and modify the transition of each hand with JS. Executing this function every second with a `setInterval`.

- We had to account for the jump that happens when a hand reaches 0deg and then jumps to 90deg, so when a hand reaches 90deg we disable the transition and put it back on in the next second.
