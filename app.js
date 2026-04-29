import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getDatabase,
ref,
push,
onChildAdded
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {

apiKey: "ضع apiKey من Firebase",

authDomain: "ضع authDomain",

databaseURL: "ضع databaseURL",

projectId: "ضع projectId",

storageBucket: "ضع storageBucket",

messagingSenderId: "ضع messagingSenderId",

appId: "ضع appId"

};


const app = initializeApp(firebaseConfig);

const db=getDatabase(app);

const messagesRef=ref(db,"messages");


window.sendMessage=function(){

let name=
document.getElementById("nameInput").value;

let text=
document.getElementById("messageInput").value;

if(!name || !text) return;

push(messagesRef,{
name:name,
text:text,
time:Date.now()
});

document.getElementById(
"messageInput"
).value="";

};


onChildAdded(messagesRef,(snapshot)=>{

let m=snapshot.val();

let box=
document.getElementById("messages");

box.innerHTML += `
<div class="message">
<div class="name">${m.name}</div>
<div>${m.text}</div>
</div>
`;

box.scrollTop=box.scrollHeight;

});
