let username = document.getElementById("username")
let password = document.getElementById("password")


function Login() {
    if (username.value == '' && password.value == '') {
        alert("Input Username and Password!")
    } else if (username.value == '') {
        alert("Username Required")
    } else if (password.value == '') {
        alert("Password Required")
    } else if (username.value == localStorage.getItem("username1") && password.value == localStorage.getItem("password1")) {
        alert("Logged In Successfully")
        location.replace('2page.html');
    } else {
        alert("User Account not Found!")
    }

}