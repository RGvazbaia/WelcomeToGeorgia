let validationForm = document.getElementById("registration-form");

validationForm.addEventListener("submit", function (element) {
  element.preventDefault();

  let errors = {};
  let form = element.target;

  let usernameBox = document.getElementById("nickname").value;

  if (usernameBox.length < 4) {
    errors.nickname = "Username must contain 4 symbols";
  }

  if (usernameBox == "") {
    errors.nickname = "Insert Nickname";
  }
let emailAddress = document.getElementById("email").value;
if (emailAddress == "") {
  errors.email1 = "Insert Email";
}


  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  if (password1 == "") {
    errors.mypassword = "Insert Password";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords does not match";
  }

  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree to the terms and conditions of the site";
  }

  let age = false;
  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "Please select your age";
  } else
    form.querySelectorAll(".error-message").forEach((item) => {
      item.textContent = " ";
    });

  for (let element in errors) {
    let pError = document.getElementById("error-" + element);

    if (pError) {
      pError.textContent = errors[element];
    }
    if (Object.keys(errors).length == 0) {
      form.submit();
    }
  }
});

let toggleEye = document.getElementById("toggleEye");

toggleEye.addEventListener("click", function () {
  if (password1.type == "password") {
    password1.setAttribute("type", "text");
    toggleEye.classList.remove("fa-eye");
    toggleEye.classList.add("fa-eye-slash");
  } else {
    password1.setAttribute("type", "password");
    toggleEye.classList.remove("fa-eye-slash");
    toggleEye.classList.add("fa-eye");
  }
});
