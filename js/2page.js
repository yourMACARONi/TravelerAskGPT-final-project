/* Set the width of the sidebar to 1700px and the left margin of the page content to 250px */
function openNav() {
     document.getElementById("mySidebar").style.display = "block";
     document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
     document.getElementById("mySidebar").style.display = "none";
     document.getElementById("main").style.marginLeft = "0";
}

// set username beside signout button
let firstname = document.getElementById('firstname');

firstname.innerText = localStorage.getItem('username1');
firstname.style.color = 'white';
// alert(firstname.innerText);







const send = document.querySelector(".btn-send");
const question = document.getElementById("question");

const chatbox = document.querySelector('.gptainer');

let wait = document.querySelector(".wait");

let name = document.getElementById("profile-name");


send.addEventListener("click", () => {
     let questionValue = question.value;
     message(questionValue, "div", chatbox, "message");
     wait.style.display = "block";
     chatGPT(questionValue).then((data) => {

          let content = data.choices[0].message.content;

          console.log(content);

          gptMessage(content, "div", chatbox, "message");

          wait.style.display = "none";

          question.value = "";
     })
});

question.addEventListener("keypress", (event) => {
     if (event.key === "Enter") {
          event.preventDefault();
          let questionValue = question.value;
          message(questionValue, "div", chatbox, "message");
          wait.style.display = "block";
          chatGPT(questionValue).then((data) => {

               let content = data.choices[0].message.content;

               console.log(content);

               gptMessage(content, "div", chatbox, "message");

               wait.style.display = "none";

               question.value = "";
          })
     }
})



function message(chatMessage, htmlTag, parentNode, messageClass) {
     let messageTag = document.createElement(htmlTag);

     messageTag.className = messageClass;
     messageTag.innerHTML = `<div class="avatar"><img src=${sessionStorage.getItem(username)} class='avatar-img'></div><p style="text-content: justify; color: orange; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">${chatMessage}</>`;


     parentNode.append(messageTag);

}

function gptMessage(chatMessage, htmlTag, parentNode, messageClass) {
     let messageTag = document.createElement(htmlTag);

     messageTag.className = messageClass;
     messageTag.innerHTML = `<div class="avatar"></div><p style="text-content: justify; color: red; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black">${chatMessage}</>`;

     parentNode.append(messageTag);

}


async function chatGPT(message) {
     let url = "https://api.openai.com/v1/chat/completions";

     let data = {
          "model": "gpt-3.5-turbo",
          "messages": [{
                    "role": "user",
                    "content": message
               },
               {
                    "content": localStorage.getItem("username1"),
                    "role": "user"
               }
          ]
     }

     let response = await fetch(url, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
               "Authorization": "Bearer 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"
          },
          body: JSON.stringify(data)
     })

     return response.json();
}