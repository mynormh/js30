const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  closePanels();
  this.classList.toggle("open");
}

function closePanels() {
  const openPanel = document.querySelector(".panel.open");
  if (openPanel) {
    openPanel.classList.remove("open");
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex-grow")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
