const info = document.querySelector("p");
const pressed = [];
const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

window.addEventListener("keyup", e => {
  pressed.push(e.keyCode);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode.join(""))) {
    info.innerText = "";
    console.log("DING DING");
    cornify_add();
  }
});
