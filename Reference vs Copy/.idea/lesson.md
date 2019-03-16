# Lessons

- When an assignment (`=`) occurs and the variable being assigned is a primitive type (Boolean, Null, Undefined, Number, String, Symbol) then the value is copied. But if they are of type Array or Object, the assignment is a reference to the array or object being assigned.

- To fix this in arrays we can create a copy of the array in multiple ways:

  - Use slice() `oldArray.slice()`
  - Use concat(..) `[].concat(oldArray)`
  - Use ES6's Spread Operator `[...oldArray]`

- To fix it in objects we can also create a copy with:

  - Use Object.assign `Object.assign({}, oldObject, {newProperties: 99})`
  - Use Spread Operator `{...oldObject}`

- All of these previous methods are shallow copies, meaning they will only copy one level deep. So it will not copy arrays inside arrays or objects inside objects, it will reference them.

- To make a deepCopy you can google solutions or use something like `const copyObj = JSON.parse(JSON.stringify(oldObject))`. This will make the object into a string first and then parse it to JSON, but this method has it's downsides, like not all objects are JSON serializable.
