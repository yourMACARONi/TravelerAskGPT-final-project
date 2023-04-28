let username = document.getElementById("username")
let password = document.getElementById("password")


function Login() {
    if (username.value && password.value == 'admin') {
       alert("Logged In Successfully!")
        window.location.assign("/index.html")
    }
}