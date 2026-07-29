// =======================
// CREATE STARS
// =======================

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

// =======================
// 22 REASONS
// =======================

const reasons = [

"❤️I love the way u love me—with ur whole heart, without holding back🥺🤍.",

"🛡️I love how protective u are. U always want me to be safe, even in the smallest things🫂❤️.",

"💪I love how hardworking u are. U never stop trying to become a better version of urself.",

"🌈I love that u dream big and work for those dreams instead of just talking about them.",

"😂I love the way u make me laugh, even when i'm having the worst day.",

"💖I love how deeply u care. Even if u don't always show it perfectly, i know ur heart feels everything.",

"🤍I love that u're honest with me, even when the truth is difficult.",

"🫂I love the way u make me feel protected, like i never have to face the world alone.",

"😊I love ur smile because it instantly becomes my favorite part of the day.",

"👀I love the way ur eyes tell me things that words sometimes can't.",

"🔥I love how passionate u are about the people u love.",

"😍I love that u always try to improve urself, even though i wish u'd be a little kinder to urself.",

"👨‍👩‍👦I love how much u love ur family. It shows me the kind of man u are.",

"🏡I love that u became my safe place without even realizing it.",

"🌍I love that i can imagine my future with u, and it feels like home.",

"💍I love that u never became just another person to me... u became my person.",

"🌸I love the way u make ordinary moments feel special just by being there.",

"🌟I love that u inspire me to become a better person every day.",

"♾️I love that even after every misunderstanding, my heart still chooses u.",

"❤️‍🩹And finally...🌎✨",

"i love u because somehow. ",

"out of billions of people in this world, my heart looked at u and quietly said...This is my home🏡❤️.This is my peace🫂🤍.This is my person🥹💍.This is the man i'll choose again and again♾️❤️ I LOVE U NANNA💓💓",

];

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const nextBtn = document.getElementById("nextBtn");
const continueBtn = document.getElementById("continueBtn");

let index = 0;

showReason();

function showReason(){

    reasonNumber.innerHTML = `Reason ${index+1} of 22 ❤️`;

    reasonText.innerHTML = reasons[index];

}

nextBtn.onclick = () => {

    index++;

    if(index < reasons.length){

        document.querySelector(".reasons-card").animate(

            [

                {opacity:0,transform:"scale(.9)"},

                {opacity:1,transform:"scale(1)"}

            ],

            {

                duration:400

            }

        );

        showReason();

    }else{

        nextBtn.style.display="none";

        continueBtn.style.display="inline-block";

    }

};

continueBtn.onclick = () => {

    window.location.href = "future.html";

};