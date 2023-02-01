let accordionContainer = document.querySelectorAll(".teambox");

accordionContainer.forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
