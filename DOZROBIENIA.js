/*const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("mouseover", function () {
  div2.classList.add("highlight");
});

div1.addEventListener("mouseout", function () {
  div2.classList.remove("highlight");
});

const hoverDiv = document.querySelector('.hover-div');
const button = hoverDiv.querySelector('button');
const hoverContent = hoverDiv.querySelector('.hover-content');

button.addEventListener('click', function() {
  hoverDiv.classList.toggle('active');
})*/
// Funkcja do generowania listy słów z tekstu
// Funkcja do generowania listy słów z tekstu
 const spanishText = "mi (nueva) casa";

    // Funkcja do generowania listy słów z tekstu
    function generateWordList(text) {
      const words = [];
      let word = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") {
          // Rozpoczęcie nawiasu - dodajemy poprzednie słowo do listy
          if (word !== "") {
            words.push(word);
            word = "";
          }

          // Szukamy zamykającego nawiasu ")"
          const closingIndex = text.indexOf(")", i);
          if (closingIndex !== -1) {
            // Dodajemy słowo w nawiasie do listy
            words.push(text.substring(i + 1, closingIndex));
            i = closingIndex; // Przeskakujemy indeks do poza zamykający nawias ")"
          }
        } else if (text[i] === " ") {
          // Znaleziono spacje - dodajemy poprzednie słowo do listy
          if (word !== "") {
            words.push(word);
            word = "";
          }
        } else {
          // Kontynuujemy budowanie słowa
          word += text[i];
        }
      }

      // Dodajemy ostatnie słowo, jeśli jest
      if (word !== "") {
        words.push(word);
      }

      return words;
    }

    // Generujemy listę słów
    const spanishWords = generateWordList(spanishText);

    // Dodajemy divy dla każdego słowa
    const container = document.getElementById("container");
    for (let i = 0; i < spanishWords.length; i++) {
      const div = document.createElement("div");
      div.textContent = spanishWords[i];
      container.appendChild(div);
    }