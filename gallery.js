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
// PHOTOS
// =======================

const photos = [

"image/p1.jpg",
"image/p2.jpg",
"image/p3.jpg",
"image/p5.jpg",
"image/p6.jpg",
"image/p7.jpg",
"image/p8.jpg",
"image/p9.jpg",
"image/p10.jpg"

];

const captions = [

"The face i never get tired of😍",

"The smile I never get tired of 😊",

"Every picture tells our story 💕",

"Distance never changed my love 🌍",

"You make ordinary moments special ✨",

"Another memory I'll cherish forever 🥹",

"My happy place is wherever you are ❤️",

"Every photo reminds me of us 💖",

"Forever my favorite person ❤️"

];

const image = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const continueBtn = document.getElementById("continueBtn");

let index = 0;

function showPhotos() {

    image.style.opacity = "0";
    caption.style.opacity = "0";

    setTimeout(() => {

        image.src = photos[index];
        caption.textContent = captions[index];

        image.style.opacity = "1";
        caption.style.opacity = "1";

        index++;

        if (index < photos.length) {

            setTimeout(showPhotos, 3000);

        } else {

            continueBtn.style.display = "block";

        }

    }, 500);

}

showPhotos();

continueBtn.onclick = () => {

    window.location.href = "letter.html";

};