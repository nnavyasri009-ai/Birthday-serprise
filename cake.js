// ===== CREATE STARS =====

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

// ===== ELEMENTS =====

const blowBtn=document.getElementById("blowBtn");
const candles=document.getElementById("candles");
const cake=document.querySelector(".cake-body");
const message=document.getElementById("message");
const continueBtn=document.getElementById("continueBtn");

// ===== BLOW CANDLES =====

blowBtn.onclick=()=>{

    candles.innerHTML="💨";

    cake.classList.add("glow");

    blowBtn.style.display="none";

    message.style.display="block";

    createConfetti();

    createBalloons();

    setTimeout(()=>{

        continueBtn.style.display="inline-block";

    },2500);

};

// ===== CONTINUE =====

continueBtn.onclick=()=>{

    window.location.href="final.html";

};

// ===== CONFETTI =====

function createConfetti(){

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.animationDuration=(Math.random()*2+2)+"s";

        c.style.background=`hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),4000);

    }

}

// ===== BALLOONS =====

function createBalloons(){

    const colors=["🎈","🎈","🎈","🎈"];

    for(let i=0;i<15;i++){

        const b=document.createElement("div");

        b.className="balloon";

        b.innerHTML=colors[Math.floor(Math.random()*colors.length)];

        b.style.left=Math.random()*100+"vw";

        b.style.animationDuration=(Math.random()*4+5)+"s";

        document.body.appendChild(b);

        setTimeout(()=>b.remove(),9000);

    }
    continueBtn.onclick = () => {

    window.location.href = "final.html";

};

}