const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

//Les variables globales//
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");
let index = 0


function main() {
	displayDots();
	clickRight();
	clickLeft();
}
main();


//affichage dots//
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");		
		}
	}	
}


//affichage click droit//
function clickRight() {
	arrowRight.addEventListener("click",() => {
		const arrayDots = document.querySelectorAll(".dots .dot");	
		arrayDots[index].classList.remove("dot_selected");
		index++;			
		if (index > slides.length -1) {
			index = 0			
		}
		arrayDots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		p.innerHTML = slides[index].tagLine;
	});
}


//affichage click gauche//
function clickLeft() {
	arrowLeft.addEventListener("click",() => {
		const arrayDots = document.querySelectorAll(".dots .dot");	
		arrayDots[index].classList.remove("dot_selected");
		index--;			
		if (index < 0) {
			index = slides.length -1			
		}
		arrayDots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		p.innerHTML = slides[index].tagLine;
	});
}