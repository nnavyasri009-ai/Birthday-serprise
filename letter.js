// ===== CREATE STARS =====

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

const paper = document.getElementById("paper");
const readBtn = document.getElementById("readBtn");
const continueBtn = document.getElementById("continueBtn");
const letterText = document.getElementById("letterText");

const letter = `
🌸Happy Birthday, My Love❤️🎂

To the most precious person in my life🤍
Today is ur day 🎉, and before anything else, i just want to thank God 🙏 for bringing u into this world. ❤️
i don't know if u realize how much ur existence has changed my life, but mine became different from the day u walked into it. 🥺
u became my happiness on ordinary days, my comfort on difficult days, and the person i wanted to tell everything to, no matter how small it was. 🤍✨
u know... people usually wish for money, success, or happiness on birthdays. 🎁

i wish for something different... 🌙
🤍 i wish that one day u'll look at urself the way i look at u.
🤍 i wish u'll see the man who is kind, caring, protective, hardworking, and capable of loving with his whole heart.
🤍 i wish u'll stop being so harsh on urself.

Because to me... u have always been enough. ❤️
🌷 Thank you for every smile u've given me.
🌷 Thank you for every late-night conversation.
🌷 Thank you for every moment u made me feel safe.
🌷 Thank you for loving me in ways i didn't even know i needed.

u taught me things about love that i never understood before. 🤍
💕u made me believe that being loved could feel peaceful. 🌸
💕u made me feel seen. 🫶
💕u made me feel special. ❤️
💕u became my safe place without even realizing it. 🏡🤍

I know we haven't always had an easy journey...
💔 We've cried.
🤍 We've misunderstood each other.
💔 We've hurt each other.
🥺 We've questioned each other.

But through everything, there has been one thing that never changed...
❤️My choice.

i know u sometimes wonder if u were ever really chosen.

So let me say this on ur birthday, hoping u'll believe it one day...
❤️ i chose u because my heart found peace with u.
❤️ i chose u because u became the person i wanted to laugh with, cry with, grow with, and dream with.

And if life asked me to choose again...
✨ i would still choose u.
❤️ Every single time.
❤️ No hesitation.
❤️ No second thoughts.
❤️ Just u.

i know u dream of becoming stronger, healthier, and the best version of urself. 💪✨
i truly believe u'll get there.
Not because u need to become worthy of love...
But because u deserve to become everything u've dreamed of being. ❤️
Please don't lose ur beautiful heart while chasing a better body. 🥺❤️
Please don't forget to love urself while trying to improve urself. 🤍
The world needs the man u are. 🌍❤️
Thank you for being born. 🎂🤍
Thank you for existing. 🫂
Thank you for every memory we've created together. ✨📸

No matter how many birthdays pass...
🌎 My favorite part of this world will always be the day it gave me u ❤️
🎉 Happy Birthday, My Love. ❤️

May this year bring u...
🌸 Peace in ur heart.
🌟 Confidence in urself.
🎯 Success in everything u work for.
😊 Countless reasons to smile.
🎂 Happy Birthday, Nanna. ❤️

♾️ Forever choosing u 🤍


`;

readBtn.onclick = () => {

    readBtn.style.display = "none";

    paper.classList.add("open");

    let i = 0;

    function type() {

        if (i < letter.length) {

            letterText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(type, 25);

        } else {

            continueBtn.style.display = "block";

        }

    }

    type();

};

continueBtn.onclick = () => {

    window.location.href = "reasons.html";

};