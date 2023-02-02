let cookie_box = document.getElementById('cookie_box');
let activeBtn = document.getElementById('activeBtn');
let closeBtn = document.getElementById('closeBtn');


closeBtn.addEventListener("click", function(){
    cookie_box.classList.remove("active");
})
activeBtn.addEventListener("click", function(){
    cookie_box.classList.remove("active");
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookie_box.classList.add("active");
    }
}, 2000)