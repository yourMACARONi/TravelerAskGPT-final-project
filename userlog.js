let username = document.getElementById("username")
let password = document.getElementById("password")


function Login() {
    if (username.value == localStorage.getItem("username1") && password.value == localStorage.getItem("password1")) {
        alert("Logged In Successfully")
        location.href = 'index.html'
    } 

    else if (username.value == '') {
        alert("Username Required")
    }

    else if (password.value == '') {
        alert("Password Required")
    }

    else {
        alert("Input Username and Password!")
    }

}
