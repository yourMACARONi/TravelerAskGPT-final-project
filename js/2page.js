/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "1700px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// set username beside signout button
let firstname = document.getElementById('firstname');

firstname.innerText = localStorage.getItem('username1');
firstname.style.color = 'white';
// alert(firstname.innerText);