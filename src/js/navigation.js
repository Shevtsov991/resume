const navHeader = document.querySelector(".navList");
let navList = ["home", "about", "services", "portfolio", "ricing"];
navList.map((element) => {
  let p = document.createElement("p");
  p.textContent = element;
  navHeader.appendChild(p);
});
