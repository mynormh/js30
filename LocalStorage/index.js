const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <input type="checkbox" id="item${i}" data-index="${i}" ${
        plate.done ? "checked" : ""
      } />
    <label for="item${i}">${plate.text}</label>
    </li>`;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  // populateList(items, itemList);
}

addItems.addEventListener("submit", addItem);
itemList.addEventListener("click", toggleDone);

populateList(items, itemList);
