let text = document.getElementById("text")
let username1 = document.getElementById("username1")
let password1 = document.getElementById("password1")

let login = document.getElementById("signup")


let info = document.getElementById("info")


function Signup() {
    if (text.value == '') {
        info.style = "color: red;"
        info.innerHTML = "Information Required"
    }
    else {
        localStorage.setItem("text", text.value)
        localStorage.setItem("username1", username1.value)
        localStorage.setItem("password1", password1.value)
        alert("Registered Successfully")
        info.innerHTML = "Registered Successfully"
    }
}

window.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        if (text.value == '') {
            info.style = "color: red;"
            info.innerHTML = "Information Required"
        }
        else {
            localStorage.setItem("text", text.value)
            localStorage.setItem("username1", username1.value)
            localStorage.setItem("password1", password1.value)
            info.style = "color: green;"
            info.innerHTML = "Registered Successfully"
            window.location.assign("/main.html") 
        }

    }
})