const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener("click", logText, { capture: false }));

button.addEventListener(
  "click",
  () => {
    console.log("click!!!");
  },
  { once: true }
);
