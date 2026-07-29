// =======================
// CREATE STARS
// =======================

const stars = document.getElementById("stars");

if (stars) {
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
}

// =======================
// 22 REASONS
// =======================

const reasons = [
"❤️ I love the way u love me—with ur whole heart, without holding back🥺🤍.",
"🛡️ I love how protective u are. U always want me to be safe, even in the smallest things🫂❤️.",
"💪 I love how hardworking u are. U never stop trying to become a better version of urself.",
"🌈 I love that u dream big and work for those dreams instead of just talking about them.",
"😂 I love the way u make me laugh, even when I'm having the worst day.",
"💖 I love how deeply u care. Even if u don't always show it perfectly, I know ur heart feels everything.",
"🤍 I love that u're honest with me, even when the truth is difficult.",
"🫂 I love the way u make me feel protected, like I never have to face the world alone.",
"😊 I love ur smile because it instantly becomes my favorite part of the day.",
"👀 I love the way ur eyes tell me things that words sometimes can't.",
"🔥 I love how passionate u are about the people u love.",
"😍 I love that u always try to improve urself, even though I wish u'd be a little kinder to urself.",
"👨‍👩‍👦 I love how much u love ur family. It shows me the kind of man u are.",
"🏡 I love that u became my safe place without even realizing it.",
"🌍 I love that I can imagine my future with u, and it feels like home.",
"💍 I love that u never became just another person to me... u became my person.",
"🌸 I love the way u make ordinary moments feel special just by being there.",
"🌟 I love that u inspire me to become a better person every day.",
"♾️ I love that even after every misunderstanding, my heart still chooses u.",
"❤️‍🩹 And finally... 🌎✨",
"I love u because somehow...",
"Out of billions of people in this world, my heart looked at u and quietly said... This is my home 🏡❤️. This is my peace 🫂🤍. This is my person 🥹💍. This is the man I'll choose again and again ♾️❤️ I LOVE U NANNA 💓💓"
];

// =======================
// ELEMENTS
// =======================

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const nextBtn = document.getElementById("nextBtn");
const continueBtn = document.getElementById("continueBtn");
const card = document.querySelector(".reason-card");

// =======================
// CHECK HTML
// =======================

if (!reasonNumber || !reasonText || !nextBtn || !continueBtn || !card) {

    alert("HTML Error! Check IDs and class names.");

} else {

    let index = 0;

    showReason();

    function showReason() {

        reasonNumber.textContent = `Reason ${index + 1} of ${reasons.length} ❤️`;
        reasonText.textContent = reasons[index];

    }

    nextBtn.addEventListener("click", function () {

        if (index < reasons.length - 1) {

            index++;

            showReason();

            card.animate(
                [
                    {
                        opacity: 0,
                        transform: "scale(.95)"
                    },
                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 400
                }
            );

        } else {

            nextBtn.style.display = "none";
            continueBtn.style.display = "inline-block";

        }

    });

    continueBtn.addEventListener("click", function () {

        window.location.href = "future.html";

    });

}