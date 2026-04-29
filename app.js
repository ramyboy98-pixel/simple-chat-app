function sendMessage(){

let name=document.getElementById("nameInput").value;
let msg=document.getElementById("messageInput").value;

if(name=="" || msg==""){
return;
}

let oldMessages=
JSON.parse(localStorage.getItem("chat")) || [];

oldMessages.push({
name:name,
text:msg
});

localStorage.setItem(
"chat",
JSON.stringify(oldMessages)
);

document.getElementById(
"messageInput"
).value="";

loadMessages();
}

function loadMessages(){

let messages=
JSON.parse(localStorage.getItem("chat")) || [];

let box=
document.getElementById("messages");

box.innerHTML="";

messages.forEach(function(m){

box.innerHTML += `
<div class="message">
<div class="name">${m.name}</div>
<div>${m.text}</div>
</div>
`;

});

box.scrollTop=box.scrollHeight;

}

loadMessages();
