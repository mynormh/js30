const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightTrigger() {
  const triggerCoords = this.getBoundingClientRect();
  const coords = {
    width: triggerCoords.width,
    height: triggerCoords.height,
    top: triggerCoords.top + window.scrollY,
    left: triggerCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(trigger =>
  trigger.addEventListener("mouseover", highlightTrigger)
);
