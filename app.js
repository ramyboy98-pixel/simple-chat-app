import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
push,
onChildAdded
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyAFPjYx14j-hmgHwj0idAifGCg0pJdZK7s",
authDomain: "simple-chat-app-90b82.firebaseapp.com",
databaseURL: "https://simple-chat-app-90b82-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "simple-chat-app-90b82",
storageBucket: "simple-chat-app-90b82.firebasestorage.app",
messagingSenderId: "569901832745",
appId: "1:569901832745:web:b20e023d9d0eb6fdb01a38"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const messagesRef = ref(db,"messages");


window.sendMessage = function(){

let name =
document.getElementById("nameInput").value;

let text =
document.getElementById("messageInput").value;

if(!name || !text) return;

push(messagesRef,{
name:name,
text:text,
time:Date.now()
});

document.getElementById("messageInput").value="";

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
