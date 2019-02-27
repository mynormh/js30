const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const context = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const effect = document.querySelector("#effect");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(error => console.error("OH NO!!!", error));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    context.drawImage(video, 0, 0, width, height);
    let pixels = context.getImageData(0, 0, width, height);
    let chosenEffect = effect.options[effect.selectedIndex].value;
    context.globalAlpha = 1;
    if (chosenEffect === "redEffect") {
      pixels = redEffect(pixels);
      context.globalAlpha = 1;
    } else if (chosenEffect === "rgbSplit") {
      pixels = rgbSplit(pixels);
      context.globalAlpha = 1;
    } else if (chosenEffect === "greenScreen") {
      pixels = greenScreen(pixels);
      context.globalAlpha = 1;
    } else if (chosenEffect === "ghosting") {
      context.globalAlpha = 0.1;
    } else {
      pixels = pixels;
      context.globalAlpha = 1;
    }

    context.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  // Instead of just having a text, we use the picture itself
  // link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome"/>`;
  strip.insertBefore(link, strip.firsChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    // Instead of changing each individual RGB value, the effect is created by taking the pixel that's forward or backward and set it to the value of the current RGB in the loop. Basically pulling apart the different Red, Green, Blue values and just moving them to either side.
    pixels.data[i - 150] = pixels.data[i + 0]; // Red
    pixels.data[i + 500] = pixels.data[i + 1]; // Green
    pixels.data[i - 500] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  // This effect is accomplished by getting our values from the range inputs to represent our RGB min and max values, then for each pixel we check if the RGB values are in between our min and max we take it out by setting the Alpha (transparency) to 0 so to make it transparent.
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
