// ===== CREATE STARS =====

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}

// ===== GIFT CLICK =====

const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

    // Prevent double click
    gift.style.pointerEvents = "none";

    // Fade out
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "0";

    // Go to next page
    setTimeout(() => {

        window.location.href = "story.html";

    }, 1200);

});