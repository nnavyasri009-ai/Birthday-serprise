// =====================
// CREATE STARS
// =====================

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}


// =====================
// STORY
// =====================

const storyLines = [

    "Every beautiful story starts unexpectedly.",

    "Ours started with a simple Carrom game...",

    "One Instagram message..."

];

const sentence = document.getElementById("storySentence");

let index = 0;

function showStory() {

    if (index >= storyLines.length) {

        document.querySelector(".story-container").style.display = "none";

        document.getElementById("chatSection").style.display = "flex";

        showChat();

        return;
    }

    sentence.classList.remove("fadeSentence");

    void sentence.offsetWidth;

    sentence.textContent = storyLines[index];

    sentence.classList.add("fadeSentence");

    index++;

    setTimeout(showStory, 3000);

}

showStory();


// =====================
// CHAT
// =====================

const chatMessages = [

{
side:"left",
text:"Hey 😊"
},

{
side:"right",
text:"Hi ❤️"
},

{
side:"left",
text:"Remember our first Carrom game?"
},

{
side:"right",
text:"Of course 😂"
},

{
side:"left",
text:"I never thought one game would bring someone so special into my life."
},

{
side:"right",
text:"Me neither ❤️"
}

];

function showChat(){

const box = document.getElementById("chatBox");

const typing = document.getElementById("typing");

let i = 0;

function next(){

if(i >= chatMessages.length){

setTimeout(showEndingStory,1500);

return;

}

typing.style.display="flex";

setTimeout(()=>{

typing.style.display="none";

const msg=document.createElement("div");

msg.className="message "+chatMessages[i].side;

msg.innerHTML=chatMessages[i].text;

box.appendChild(msg);

box.scrollTop=box.scrollHeight;

i++;

setTimeout(next,900);

},1000);

}

next();

}


// =====================
// ENDING STORY
// =====================

function showEndingStory(){

document.getElementById("chatSection").style.display="none";

document.querySelector(".story-container").style.display="flex";

const ending=[

"And slowly...",

"You became my favorite person ❤️"

];

let i=0;

function next(){

if(i>=ending.length){

const btn=document.getElementById("continueBtn");

btn.style.display="block";

btn.onclick=()=>{

window.location.href="gallery.html";

};

return;

}

sentence.classList.remove("fadeSentence");

void sentence.offsetWidth;

sentence.textContent=ending[i];

sentence.classList.add("fadeSentence");

i++;

setTimeout(next,3000);

}

next();

}