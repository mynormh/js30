const words = document.querySelector(".words");
const languageSelect = document.querySelector("#language");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-EN";

let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

function changeLanguage() {
  recognition.lang = languageSelect.options[languageSelect.selectedIndex].value;
}

recognition.addEventListener("end", recognition.start);
recognition.start();
