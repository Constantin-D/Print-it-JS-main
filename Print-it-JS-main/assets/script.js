// Tableau

// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ];

// const dots = document.querySelector(".dots")
// // arrow_lef & arrow_right
// let selectedDot =0
// const arrowRight = document.querySelector(".arrow_right")
// const arrowLeft = document.querySelector(".arrow_left")
// const slidesLength = slides.length
// console.log(slidesLength);

// function dotsGenerate() {
// 	for(let i=0; i<slidesLength; i++){
// 		const divDot = document.createElement("div")
// 		divDot.setAttribute("class", "dot")
// 		dots.appendChild(divDot)
// 		if (i === selectedDot) {
// 			divDot.setAttribute("class", "dot_selected")
// 		}
// 	}
// }

// dotsGenerate()

// arrowRight.addEventListener("click", function(event){
// 	console.log(event)
// })

// arrowLeft.addEventListener("click", function(event){
// 	console.log(event)
// })

  const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
// Les Variables Globales
const dots = document.querySelector(".dots");
  let selectedDot =0;
  // arrow_lef & arrow_right
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

const slidesLength = slides.length;
console.log(slidesLength);

// let image = document.querySelector(".banner-im");
// let textImage = document.createElement("tagline");


function dotsGenerate() {
	for(let i=0; i<slidesLength; i++){
		const divDot = document.createElement("div");
		divDot.classList.add("dot");
		dots.appendChild(divDot);
		if (i === selectedDot) {
			divDot.classList.add("dot_selected");
		}
	}
}

dotsGenerate();

arrowRight.addEventListener("click", (event) => {
	console.log(event);
})

arrowLeft.addEventListener("click", (event) => {
	console.log(event);
})




