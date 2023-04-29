let username = document.getElementById("username")
let password = document.getElementById("password")


function Login() {
    if (username.value == localStorage.getItem("username1") && password.value == localStorage.getItem("password1")) {
        alert("Logged In Successfully")
        location.href = '/index.html'
    } else {
        alert("Username Or Password is Invalid")
    }

}
