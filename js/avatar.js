let username = localStorage.getItem('username1');
var div = document.querySelector('.avatar');

var div1 = document.querySelector('.avatar1');

const button = document.querySelector('.change');

let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let email_input = document.getElementById("email");


async function pic() {
     var url = `https://api.dicebear.com/6.x/adventurer/svg?seed=${Math.random(100) * 20}`
     response = await fetch(url);
   
     let blob = await response.blob();
     div.src = URL.createObjectURL(blob);
   
     sessionStorage.setItem(username, url);

     div1.src = sessionStorage.getItem(username)
   
     return url;
   }
   
   window.addEventListener('DOMContentLoaded', () => {
     if (sessionStorage.getItem(username)) {
          div.src = sessionStorage.getItem(username)
          div1.src = sessionStorage.getItem(username)
     } else {
          pic()
     }
   })

button.addEventListener("click", () => {
     pic();
})

window.addEventListener('DOMContentLoaded', () => {

     username_input.value = localStorage.getItem("username1");
     email_input.value = localStorage.getItem("email");
     password_input.value = localStorage.getItem("password1");

})