let emailAddress = document.getElementById(email);
let errorText = document.getElementById(error-email1);
let registrationForm = document.getElementById(registration-form);
let password = document.getElementById(password1);
let errorPassword = document.getElementById (error-mypassword);
let emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let Regex= "^[A-Za-z][A-Za-z0-9_]{7,29}$";

emailAddress.addEventListener('keydown', function(){
  
    if(emailAddress.match(emailValidation)){
        errorText.innerText = 'Email is Valid'
            errorText.style.color = '#00ff00';
            errorText.style.border = "3px solid #00ff00"
    }
    else{
        errorText.innerText = 'Please insert another Email'
        errorText.style.color = '#ff0000';
        errorText.style.border = "3px solid #ff0000"
    }
})



password.addEventListener('keyup', function(){
    if(password.match(Regex)) {  
        errorPassword.innerText = 'Password is Strong'
        errorPassword.style.color = '#00ff00' ;
      } else {
        errorPassword.innerText = 'Week Password, Please insert stronger one'
        errorPassword.style.color = '#ff0000' ;
      }
    })


