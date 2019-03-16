# Lessons

- We don't use just a `setInterval( seconds--)` because there are cases where it's not guaranteed to run at specified number of milliseconds, like a lot of tabs or on iOS when scrolling. Instead we capture the "now" time and to that we add the number of seconds to get the "then", after that we do use a `setInterval(..)` and calculate "then" minus `Date.now()` to get the seconds left. This way we always work with specific DateTimes.

- `clearInterval(..)` is used to stop a `setInterval()`, that's why the interval is stored in a variable so we can reference it in `clearInterval(..)` and stop it.

- setInterval runs for the first time after the x amount of milliseconds have elapsed, so the timer won't count the first second. That's why the `displayTimeLeft(..)` function is created and we use it immediately before the interval (and also inside the interval).

- By using `Math.floor(seconds / 60)` we only get the whole minutes, without the extra "seconds" in those minutes. And for the seconds we use the mod operator.

- `document.title = ..` allows us to update the tab title with the timer.

- `Date.now()` gives us the number of ms since January 1, 1970, 00:00:00 UTC (). So we use `new Date (..)` to convert that to a DateTime object.

- Through data attributes in our HTML button elements we can send the time we want each button to add to a function and reuse it for every button.

- If we click the buttons consecutively we would just add a lot of intervals/timers and the display would alternate to show them all. That's why right when start a new timer we clean the previous one(s).

- If a HTML element has a name property, you can access the element via `document.elementName` and if it's nested inside another element that also has a name property you access it via `document.wrapName.elementName`.

- Inside the `submit` eventListener we use `e.preventDefault()` so that the event doesn't reload the page with a HttpGet (adds `?minutes=10` to the URL).

- You can clean all the fields in the form with `this.reset()`
