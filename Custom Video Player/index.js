const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const durationBar = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playButton = player.querySelector(".toggle");
const sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

let mouseDown = false;

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  playButton.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleSliderUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime * 100) / video.duration;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX * video.duration) / durationBar.offsetWidth;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

playButton.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

sliders.forEach(slider =>
  slider.addEventListener("change", handleSliderUpdate)
);
sliders.forEach(slider =>
  slider.addEventListener("mousemove", handleSliderUpdate)
);

durationBar.addEventListener("click", scrub);
durationBar.addEventListener("mousemove", e => mouseDown && scrub(e));
durationBar.addEventListener("mousedown", () => (mouseDown = true));
durationBar.addEventListener("mouseup", () => (mouseDown = false));
