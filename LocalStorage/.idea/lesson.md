# Lessons

- We use the event `submit` and not `click` to account for someone pressing enter or any other way to submit the form.

- By default a from will refresh the page on submit, so we use `e.preventDefault()` to stop that.

- Inside the eventListener callback function, using `this` instead of querying the element like `document.querySelector(..)` is useful in case we want to use the same function on different forms.

- Forms have a `.reset()` method to clear the fields.

- We store every entry in an array and then we map the array to return a string that represents the HTML list of items.

- You can include conditionals inside `${}` in a string template, so we use a ternary in it to check if we should include the `checked` attribute. We can't do something like `checked="false"` because any appearance of the `checked` attribute will mark it as checked.

- localStorage is like an object on the browser where we can store data in and it will persist after reloads. But it's not like a regular object, it's a key-value store, and we can only store strings for each key. So we stringify our items array and then store it in localStorage.

- We assign the localStorage value of our `items` key parsing it to an object with `JSON.parse(..)` or if that's empty we assign an emtpy array. Then in page load (the global scope of the script), we call `populateList()`, this way if there are items stored in localStorage it will load them on page load and if not it will start with an empty list.

- If we add an eventListener on each item list to toggle the checkbox, since the list is dynamic, when we add a new item it won't have an eventListener. So instead of adding an eventListener on each item, we add it to the entire list and then we use the `data-index` attribute to figure out the specific item being clicked. This is event delegation.

- Event Delegation is like saying to the parent element to listen for an event but instead of handling the event itself, it should delegate it to the children element.

- By adding the click eventListener on the entire list it will fire up with every click we make inside the list, no matter where. So we can immediately exit the function if the event target (`e.target`) doesn't match an input since we only care if the click happens on the checkbox.
