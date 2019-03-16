# Lessons

- We use the `perspective` css property to give the elements a 3D effect, affecting the distance between the z plan and the person viewing it. The smaller the value, the bigger the effect.

- `fetch` is a method to make Ajax calls, built into the browser. It returns a `Promise`, and the data that it got from the call is a `ReadableStream` so you have to convert it to the desired type (e.g. JSON) to get the actual data.

- If you want to keep an Array as `const`, you can declare the Array as a `const` and instead of assigning another array to it, you can just `...` (spread) the items and `push` them.

- You can use the `.match()` on a string and pass it a `RegEx` to find if the string includes another string. OR you can use the new `.includes()` and just pass the string you want to find.

- On an `input`, the event `change` only fires when you go off (click out of) the input after typing on it. If you want to fires an event on every key pressed, you use the `keyup` event.

- We add to the suggestions list by using `.map()` over the array of matches and returning a string containing HTML for every item, we then `join()` all the arrays to assign it to `suggestions.innerHTML = ..`

- We add the highlight effect by using a `RegEx` to match the typed word and replacing it in the string with another string containing HTML `span.hl` wrapping the matched value.
