let navigation = document.getElementById("navBar");
let navUl = document.getElementById("ul-item");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
  burgerBar.classList.toggle("activeBugerBar");
  navUl.classList.toggle("toggleNavigation");
});
