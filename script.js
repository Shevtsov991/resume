const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const navList = document.querySelector(".navList");

console.log(header);
console.log(main);
console.log(footer);

function createElement(text, tag, className, place) {
  let titel = document.createElement(tag);
  titel.classList.add(className);
  let upperText = text
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  titel.textContent = upperText;
  place.appendChild(titel);
}

createElement("logo", "span", "logo", header);
createElement("home", "li", "navItem", navList);
createElement("about", "li", "navItem", navList);
createElement("services", "li", "navItem", navList);
createElement("portfolio", "li", "navItem", navList);
createElement("pricing", "li", "navItem", navList);
createElement("blog", "li", "navItem", navList);
createElement("pages", "li", "navItem", navList);
createElement("contact", "li", "navItem", navList);
createElement("this is me", "span", "firstText", main);
createElement("roman shevtsov", "h1", "name", main);
createElement(
  "You will begin to realise why thisexercive is called the dickens patern with referenceto the ghost showing scrooge some different futures",
  "p",
  "name",
  main
);
createElement("discover now", "button", "btn", main);
createElement("Mainimg", "img", "mainImg", main);
