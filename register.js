let Email = document.getElementById("email")
let username1 = document.getElementById("username1")
let password1 = document.getElementById("password1")

let login = document.getElementById("signup")


let info = document.getElementById("info")


function Signup() { 
    if (Email.value == '' && username1.value == '' && password1.value == '') {
        alert("Information Required")
    }
    else if (Email.value == '') {
        alert("Email Required")
    }
    
    else if (username1.value == '') {
        alert("Username Required")
        
    }

    else if (password1.value == '') {
        alert("Password Required")
     }

    else {
        localStorage.setItem("email", Email.value)
        localStorage.setItem("username1", username1.value)
        localStorage.setItem("password1", password1.value)
        alert("Registered Successfully")
        info.innerHTML = "Registered Successfully"
    }
}
