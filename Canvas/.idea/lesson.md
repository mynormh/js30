# Lessons

- You don't actually draw on the canvas, you draw on the context of the canvas which can be 2D or 3D.

- `mousemove` helps us track the movement of the mouse on the canvas. We add eventListeners on the canvas to check if we're actually drawing, `mousedown` indicates we are drawing and `mouseup` and `mouseout` that we are not drawing.

- We draw the line, using the `mousemove` event properties: `offsetX` and `offsetY`.

- HSL (Hue, Saturation, Lightness) allows us to programmatically pick a color from the color palette/rainbow. The Hue ranges from 0 to 360, so everytime we run our function `draw()` we increment the Hue by 1, thus allowing us to change colors as we draw.

- You can't name a JS function `clear()` because `clear()` is a built in function/method.
