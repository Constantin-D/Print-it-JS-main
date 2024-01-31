// Tableau
const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];
// Les Variables Globales
const dots = document.querySelector(".dots");
let selectedDot = 0;
// arrow_lef & arrow_right
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
// Nb d'éléments dans le tableau
const slidesLength = slides.length;
console.log(slidesLength);

function dotsGenerate() {
    // dots.innerHTML = "";
    for (let i = 0; i < slidesLength; i++) {
        const divDot = document.createElement("div");
        divDot.classList.add("dot");
        dots.appendChild(divDot);
        if (i === selectedDot) {
            divDot.classList.add("dot_selected");
        }
    }
}

dotsGenerate();

arrowRight.addEventListener("click", (e) => {
    console.log(e);
    // dotsGenerate();
});

arrowLeft.addEventListener("click", (e) => {
    console.log(e);
    // dotsGenerate();
});

function updateSlide() {
    // Changer l'image
    const imagePath = "./assets/images/slideshow/" + slides[selectedDot].image;
    const imageElement = document.querySelector(".banner-img");
    imageElement.src = imagePath;

    // Changer le texte correspondant à l'image
    const textElement = document.querySelector("#banner p");
    // Mettre à jour le texte de l'image affichée
    textElement.innerHTML = slides[selectedDot].tagLine;

    // Mettre à jour les points indicateurs (dot-solid)
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === selectedDot) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// updateSlide();
// dotsGenerate();

arrowRight.addEventListener("click", (e) => {
    // Changement droit du dot sélectionné
    selectedDot = (selectedDot + 1) % slidesLength;
    // console.log(e);
    updateSlide();
});

//  updateSlide();

arrowLeft.addEventListener("click", (e) => {
    // Changement gauche du dot sélectionné
    selectedDot = (selectedDot - 1 + slidesLength) % slidesLength;
    // console.log(e);
    updateSlide();
});

//  updateSlide();
