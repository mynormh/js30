# Lessons

- For security reasons we need a trusted origin (https, localhost) to access the user's webcam.

- We access the user's webcam through `navigator.mediaDevices.getUserMedia`.

- We then provide the `localMediaStream` to our HTML video element.

- It's important to match the canvas width and height to the width and height of the stream provided by the webcam.

- We set an interval of x milliseconds (in this case 16, can vary depending on the computer's performance), and everytime we draw to the canvas a frame of the video. We fire this up when the video element emits the event `canplay`.

- To take the photo we use `canvas.toDataURL("image/jpeg")` and this will give us a Base64 representation of the canvas (the frame of the stream at that moment), then we create an anchor HTML Element `<a>` and set it's `href` to the Base64 representation data, this will make it so when we open the link in a new tab the explorer will interpret the Base64 as our picture. We also set the `download` attribute of the anchor and set it to any name so we can download the picture by just clicking the link.

- To apply filters we take the pixels out of the canvas using `context.getImageData()` where we get a huge special kind of array representing the RGBA (Red, Green, Blue, Alpha) values for each pixel, mess with it b changing the RGB and then put it back in to the canvas by using `context.putImageData()`.
