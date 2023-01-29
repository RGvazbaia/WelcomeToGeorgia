
let formRegistration = document.getElementById("form-registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  //username
  let usernameField = document.getElementById("fname").value;
  //   let usernameField = document.querySelector('[name= "username"]').value;

  if (usernameField.length < 5) {
    errors.username = "Username must be more then 5 characters";
  }

  if (usernameField == "") {
    errors.username = "Username can not be empty";
  }

  //   password
  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;

  if (password1 == "") {
    errors.mypassword = "Password field can not be empty";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords do not match";
  }

  //checkbox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    //agree == false
    errors.agree = "You must agree our terms and conditions";
  }

  //radio
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "Please select your age";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for (let item in errors) {  

    let spanError = document.getElementById("error_" + item);

    if (spanError) {
      spanError.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// let errors = {
// username: 'Username must be more then 5 characters',
// mypassword:'Password field can not be empty',
// mypassword2: 'Passwords do not match';
// agree:'You must agree our terms and conditions'
// age:Please select your age"

// }

// show hide password
let passwordShowHide = document.getElementById("showpassword");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordShowHide.type == "password") {
    passwordShowHide.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordShowHide.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

//email validation
let emaielField = document.getElementById("myemail");

emaielField.addEventListener("focus", function () {
  emaielField.style.outline = "none";
});

emaielField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("myemail").value;
  let spanErrorText = document.getElementById("emailError");
  let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailPattern)) {
    spanErrorText.innerText = "Your Email is Valid";
    spanErrorText.style.color = "green";
    emaielField.style.border = "2px solid green";
  } else {
    spanErrorText.innerText = "Your Email is Invalid";
    spanErrorText.style.color = "red";
    emaielField.style.border = "2px solid red";
  }

  if (emailValue == "") {
    spanErrorText.innerText = " ";
  }
});