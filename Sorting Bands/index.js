const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];
const bandsList = document.querySelector("#bands");

function stripArticle(name) {
  if (
    name.startsWith("The ") ||
    name.startsWith("A ") ||
    name.startsWith("An ")
  ) {
    return name.substring(name.indexOf(" ") + 1, name.length);
  }
  return name;
}

const bandsWithoutArticles = bands.sort((a, b) =>
  stripArticle(a) > stripArticle(b) ? 1 : -1
);

function populateList(list) {
  const bandItems = list.map(band => `<li>${band}</li>`).join("");
  bandsList.innerHTML = bandItems;
}

populateList(bandsWithoutArticles);
