const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let firstChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === firstChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  firstChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
