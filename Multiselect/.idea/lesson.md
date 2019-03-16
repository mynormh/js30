# Lessons

- We use `e.shiftKey` to check if the shift key is pressed when the click happens.

- In an eventListener's callback function, `this` points to the element on which the event was fired from.

- We use `this` to get both items that were checked, but differentiate between the first checked and last checked by checking if the shift key is being pressed. If it is being pressed then the click event is fired from the last checked.

- We validate if the selection is made from top to bottom or from bottom to top by checking if the checkbox checked is either `this` (which will point to the last checked item) or `firstChecked`. If the first item clicked is at top then `firstChecked` will be found first, otherwise it will be `this`.
