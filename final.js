// =====================================
// CREATE STARS
// =====================================

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// =====================================
// SHOOTING STAR
// =====================================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*250+"px";

    star.style.left=(window.innerWidth+100)+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

setInterval(shootingStar,7000);

// =====================================
// ELEMENTS
// =====================================

const scene=document.getElementById("scene");

const heartSection=document.getElementById("heartSection");

const typing=document.getElementById("typingContainer");

const typingText=document.getElementById("typingText");

const signature=document.getElementById("signature");

const ending=document.getElementById("ending");

const replay=document.getElementById("replay");

const music=document.getElementById("bgMusic");

// =====================================
// MOVIE SCENES
// =====================================

const movie=[

{
text:"",
time:3000
},

{
text:"Distance kept us apart...",
time:3500
},

{
text:"But somehow...",
time:3000
},

{
text:"You became my favorite person ❤️",
time:4500
}

];

let current=0;

// =====================================
// PLAY MOVIE
// =====================================

function playMovie(){

    if(current>=movie.length){

        scene.style.display="none";

        showHeart();

        return;

    }

    scene.style.opacity="0";

    setTimeout(()=>{

        scene.innerHTML=movie[current].text;

        scene.style.opacity="1";

        setTimeout(()=>{

            scene.style.opacity="0";

            current++;

            setTimeout(playMovie,1500);

        },movie[current].time);

    },500);

}

playMovie();

// =====================================
// HEART
// =====================================

function showHeart(){

    heartSection.style.display="flex";

    let size=80;

    const heart=document.getElementById("heart");

    heart.style.fontSize=size+"px";

    const grow=setInterval(()=>{

        size+=5;

        heart.style.fontSize=size+"px";

        if(size>=190){

            clearInterval(grow);

            setTimeout(startTyping,2500);

        }

    },70);

}

// =====================================
// TYPING
// =====================================

const lines=[

"Thank you for coming into my life.",

"No matter where life takes us...",

"I'll always choose you ❤️"

];

function startTyping(){

    typing.style.display="block";

    let line=0;

    function nextLine(){

        if(line>=lines.length){

            showSignature();

            return;

        }

        let i=0;

        const p=document.createElement("p");

        typingText.appendChild(p);

        function type(){

            if(i<lines[line].length){

                p.innerHTML+=lines[line].charAt(i);

                i++;

                setTimeout(type,45);

            }else{

                line++;

                setTimeout(nextLine,900);

            }

        }

        type();

    }

    nextLine();

}

// =====================================
// SIGNATURE
// =====================================

function showSignature(){

    signature.style.display="block";

    setTimeout(()=>{

        ending.style.display="block";

    },2000);

   setTimeout(()=>{

ending.style.display="none";

signature.style.display="none";

typing.style.display="none";

heartSection.style.display="none";

scene.style.display="none";

endingScene();

},5000);

}

// =====================================
// REPLAY
// =====================================

replay.onclick=()=>{

    window.location.href="index.html";

};

// =======================
// FIREWORKS
// =======================

function fireworks(){

    for(let i=0;i<80;i++){

        const f=document.createElement("div");

        f.className="firework";

        f.style.left=Math.random()*window.innerWidth+"px";

        f.style.top=Math.random()*window.innerHeight+"px";

        f.style.setProperty("--x",(Math.random()*400-200)+"px");

        f.style.setProperty("--y",(Math.random()*400-200)+"px");

        f.style.background=`hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(f);

        setTimeout(()=>{

            f.remove();

        },1000);

    }

}

// =======================
// PETALS
// =======================

function petals(){

    setInterval(()=>{

        const p=document.createElement("div");

        p.className="petal";

        p.innerHTML="🌹";

        p.style.left=Math.random()*100+"vw";

        p.style.animationDuration=(6+Math.random()*4)+"s";

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },10000);

    },500);

}

// =======================
// BALLOONS
// =======================

function balloons(){

    setInterval(()=>{

        const b=document.createElement("div");

        b.className="balloon";

        b.innerHTML="🎈";

        b.style.left=Math.random()*100+"vw";

        b.style.animationDuration=(8+Math.random()*4)+"s";

        document.body.appendChild(b);

        setTimeout(()=>{

            b.remove();

        },12000);

    },1200);

}

// =======================
// START EFFECTS
// =======================

setTimeout(()=>{

    fireworks();

    setInterval(fireworks,3500);

    petals();

    balloons();

},18000);

const moon=document.getElementById("moon");
const secret=document.getElementById("secret");
const secretMessage=document.getElementById("secretMessage");

let clicks=0;

const hiddenText=`One day...

This won't be a website anymore.

It'll be me...

Standing in front of you...

Wishing you Happy Birthday ❤️`;

moon.onclick=()=>{

clicks++;

if(clicks==5){

secret.style.display="flex";

typeSecret();

}

};

function typeSecret(){

secretMessage.innerHTML="";

let i=0;

function type(){

if(i<hiddenText.length){

secretMessage.innerHTML+=hiddenText.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}

secret.onclick=()=>{

secret.style.display="none";

clicks=0;

};

// =========================
// FINAL CINEMATIC ENDING
// =========================

const lastQuote=document.getElementById("lastQuote");

function endingScene(){

document.body.classList.add("sunrise");

lastQuote.style.display="block";

const text="Every ending is just the beginning of another beautiful chapter... ❤️";

let i=0;

function type(){

if(i<text.length){

lastQuote.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}else{

setTimeout(()=>{

replay.style.display="inline-block";

},2500);

}

}

type();

}

setTimeout(()=>{

const wish=document.createElement("div");

wish.innerHTML="☄️ Make a wish...";

wish.style.position="fixed";
wish.style.top="80px";
wish.style.left="50%";
wish.style.transform="translateX(-50%)";
wish.style.fontSize="30px";
wish.style.opacity="0";
wish.style.transition="2s";
wish.style.zIndex="999";

document.body.appendChild(wish);

setTimeout(()=>{

wish.style.opacity="1";

},100);

setTimeout(()=>{

wish.style.opacity="0";

},5000);

},25000);