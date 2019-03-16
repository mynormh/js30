# Lessons

- You can declare CSS variables and update them with JS

- You can check what features the browser supports by checking the `__proto__` in devtools for an object of that type. e.g.: check the methods of an array like map, filter, etc.

- With the `change` event we listen when one of the input values changes, in the case of `type="range"` we get the value only when we let go of the slider. If we want to get the value while we're moving the slider, we use the `mousemove` event.

- We can use `dataset` to get an object containing all the data attributes of the HTML element.

- In JS when we get the value of an input, we get the raw value (no suffix), for example `10` instead of `10px`. Since we need the suffix for some properties like spacing and blur, we use the data attributes in each input element to pass to JS the corresponding suffix. In case there's no suffix (e.g. Color input) we assign an empty string, otherwise it'd append `undefined` as suffix.

- To get the property we want to change we use and get the input `name` property and update the style attribute of the entire document.

- If the same variable is specified with another value at a lower level of the CSS Cascade, the closest one to the element using that variable will take precedence.

- If there are two variables affecting the same css attribute (like blur and grayscale) both of them need to have a value, so I initialized the default values.
