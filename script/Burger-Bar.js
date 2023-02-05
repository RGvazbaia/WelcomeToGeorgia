let navigation = document.getElementById("navBar");
let navUl = document.getElementById("ul-item");
let burgerBar = document.getElementById("burgerBar");
let closeHome = document.querySelector(".closehome");
let closeContact = document.querySelector(".closecontact");
let closeAbout = document.querySelector(".closeabout");

burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
  burgerBar.classList.toggle("activeBugerBar");
  navUl.classList.toggle("toggleNavigation");
});

closeHome.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
  burgerBar.classList.toggle("activeBugerBar");
  navUl.classList.toggle("toggleNavigation");
});

closeContact.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
  burgerBar.classList.toggle("activeBugerBar");
  navUl.classList.toggle("toggleNavigation");
});

closeAbout.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
  burgerBar.classList.toggle("activeBugerBar");
  navUl.classList.toggle("toggleNavigation");
});
