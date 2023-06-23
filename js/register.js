// register input
const email = document.getElementById('email');
const username1 = document.getElementById('username1');
const password1 = document.getElementById('password1');
const input = document.querySelectorAll('input-box');

// form
const signupForm = document.querySelector('#signup-form');

let button = document.getElementById("button");

// errors
const emailError = document.getElementById('emailError');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');
const message = document.querySelector('span');

// user signup
/*
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const userValue = username1.value.trim();
    const passValue = password1.value.trim();

    const min = 5;
    // EMail//
    if (emailValue === '') {
      emailError.innerText = 'Email is Required!';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else if (!validEmail(emailValue)) {
      emailError.innerText = 'Invalid Email Address!';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else {
      localStorage.setItem('email', emailValue);
      emailError.classList.add('success');
      email.style.border = '3px solid rgba(78, 235, 16, 0.775)';
      emailError.innerText = '';
    }

    // username//
    if (userValue === '') {
      userError.innerText = 'Username is Required!';
      userError.classList.add('error');
      username1.style.border = '2px solid red';

    } else if (userValue.length < min) {
      userError.innerText = 'Minimum length required is 5.';
      userError.classList.add('error');
      username1.style.border = '2px solid red';

    } else if (!validUser(userValue)) {
      userError.innerText = 'Invalid Username!';
      userError.classList.add('error');
      username1.style.border = '2px solid red';

    } else {
      localStorage.setItem('username1', userValue);
      userError.classList.add('success');
      username1.style.border = '3px solid rgba(78, 235, 16, 0.775)';
      userError.innerText = '';

    }
    // password

    if (passValue === '') {
      passError.innerText = 'Password is required.';
      passError.classList.add('error');
      password1.style.border = '2px solid red';

    } else if (!validPass(passValue)) {
      passError.innerText =
        'Invalid Password! Try : @, 1, A';
      passError.classList.add('error');
      password1.style.border = '2px solid red';

    } else {
      localStorage.setItem('password1', passValue);
      passError.classList.add('success');
      password1.style.border = '3px solid rgba(78, 235, 16, 0.775)';
      passError.innerText = '';

    }

    const getEmail = localStorage.getItem('email');
    const getUsername = localStorage.getItem('username1');
    const getPassword = localStorage.getItem('password1');

    const getSignup = getEmail && getUsername && getPassword;
    const getSignupValue = emailValue && userValue && passValue;

    if (getSignupValue === '') {
      alert('All fields Required!');
      return false;
    }
    // else if (getSignup === !validEmail(emailValue) && !validUser(userValue) && !validPass(passValue)) {
    // getSignup.classList.add('error');
    // getSignup.style.border = '2px solid red';

    // }
    return true;
  });
}
*/

const signupError = "border-color: red; border-bottom: solid red;";
const signupSucess = "border-color: green; border-bottom: solid green;";

window.addEventListener("keyup", () => {
  userUsername = username1.value;
  userPassword = password1.value.trim();
  userEmail = email.value.trim();

  if (userUsername.length <= 5) {
    button.disabled = true;
    userError.textContent = "atleast 5 characters";
    username1.style = signupError;
  } else if (!validEmail(userEmail)) {

    console.log(validEmail(userEmail));
    email.style = signupError;
    emailError.textContent = "please provide a valid E-mail Address";
  } else if (userPassword.length < 2) {
    password1.style = signupError;
    passError.textContent = "please provide a valid Password";
  } else {
    userError.textContent = "";
    username1.style = signupSucess;
    email.style = signupSucess;
    emailError.textContent = "";
    password1.style = signupSucess;
    passError.textContent = "";
    button.disabled = false;
    return true;
  }
})

button.addEventListener("click", () => {
  let userName = username1.value;
  let userEmail = email.value.trim();
  let userPassword = password1.value.trim();

  localStorage.setItem("username1", userName);
  localStorage.setItem("email", userEmail);
  localStorage.setItem("password1", userPassword);

  location.href = "/main.html";
})


function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validUser(username) {
  const re = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  return re.test(username);
}

function validPass(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
}