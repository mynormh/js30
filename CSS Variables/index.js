const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => {
  const suffix = input.dataset.suffix || "";
  document.documentElement.style.setProperty(
    `--${input.name}`,
    `${input.value}${suffix}`
  );
});

function handleUpdate() {
  const suffix = this.dataset.suffix || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

inputs.forEach(input => {
  input.addEventListener("change", handleUpdate);
  if (input.type === "range") {
    input.addEventListener("mousemove", handleUpdate);
  }
});
