let cookie_box = document.getElementById("cookie_box");
let activeBtn = document.getElementById("activeBtn");
let closeBtn = document.getElementById("closeBtn");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

closeBtn.addEventListener("click", function () {
  cookie_box.classList.remove("active");
});
activeBtn.addEventListener("click", function () {
  cookie_box.classList.remove("active");
  document.cookie = "username=Rati";
});

setTimeout(function () {
  let cookieAccepted = getCookie("username");
  if (cookieAccepted == "") {
    cookie_box.classList.add("active");
  }
}, 2000);
