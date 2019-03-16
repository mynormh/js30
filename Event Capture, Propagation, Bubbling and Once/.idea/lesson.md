# Lessons

- BUBBLING is when the browser figures out where you clicked on but it also triggers an event on every element all the way up in the DOM. You don't always see them because you're not listening for that same event (click in this case) on every one of those elements.

- The way it works on modern browsers is that first the browser will first do something called a CAPTURE where when you first click (or any event) on an element it will ripple down (from the top DOM element down to the element being clicked) and it captures all those events, then it stops at the bottom (the element being clicked) and then it starts doing the BUBBLING where it'll go all the way back up and starts triggering the captured events.

- On `.addEventListener(..)` you can add a third argument for options, if you pass `{ capture: true }` then the events will fire on CAPTURE instead of BUBBLING, so it will fire first on the top elements all the way down to the element that is being clicked on.

- On the callback function of an eventListener you can use `e.stopPropagation();` to stop the bubbling, so it will only trigger on the item being clicked on. If used in conjunction with `{ capture: true }` it will always fire only on the element at the top, thus stopping the CAPTURE.

- You can also use the option `{once: true }` so after it fires one time it will unbind itself, meaning it will do `.removeEventListener(..)` for that same event. This is useful for example in store checkouts where you don't want a user to click a button more than once.
