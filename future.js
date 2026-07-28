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

// ===== FUTURE TIMELINE =====

const dreams=[

{
title:"🌸 First Meeting",
text:"I can't wait for the day I finally see you in person. It'll be the happiest day of my life."
},

{
title:"🤗 First Hug",
text:"The hug that makes all the distance disappear."
},

{
title:"☕ Our First Date",
text:"A simple coffee, endless conversations, and beautiful memories."
},

{
title:"🎬 Movie Nights",
text:"Watching our favorite movies while fighting over popcorn."
},

{
title:"✈️ Traveling Together",
text:"Exploring beautiful places and collecting unforgettable memories."
},

{
title:"📸 Thousands of Pictures",
text:"Every smile, every trip, every moment captured forever."
},

{
title:"🏡 Our Dream Home",
text:"A home filled with love, laughter, peace, and happiness."
},

{
title:"💍 Forever Together",
text:"Growing old together and celebrating every birthday side by side. ❤️"
}

];

const stepTitle=document.getElementById("stepTitle");
const stepText=document.getElementById("stepText");

const nextBtn=document.getElementById("nextBtn");
const continueBtn=document.getElementById("continueBtn");

let index=0;

showStep();

function showStep(){

    stepTitle.innerHTML=dreams[index].title;
    stepText.innerHTML=dreams[index].text;

}

nextBtn.onclick=()=>{

    index++;

    if(index<dreams.length){

        document.querySelector(".timeline-card").animate(

            [
                {opacity:0,transform:"translateY(40px)"},
                {opacity:1,transform:"translateY(0)"}
            ],

            {
                duration:600
            }

        );

        showStep();

    }else{

        nextBtn.style.display="none";
        continueBtn.style.display="inline-block";

    }

};

continueBtn.onclick=()=>{

    window.location.href="cake.html";

};