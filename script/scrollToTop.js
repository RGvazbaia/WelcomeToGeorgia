"use strict";
function scrollToTop() {
  window.scrollTo(0, 0);
}

document.addEventListener("scroll", function () {
  let ScrollValue = scrollY;
  let top = document.querySelector(".scrollTop");
  if (ScrollValue == 0) {
    top.style.display = "none";
  } else {
    top.style.display = "block";
  }
});
