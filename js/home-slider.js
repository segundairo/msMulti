const slideContainer = document.querySelector(".sliders")

const slides = document.querySelectorAll(".sliders .slider")

const prevBtn = document.getElementById("btn-prev")
const nextBtn = document.getElementById("btn-next")

// set start image id
let counter = 1
const size = slides[0].clientWidth

slideContainer.style.transform = "translateX(" + -100 * counter + "vw)"

nextBtn.addEventListener("click", () => {
	if (counter >= slides.length - 1) return
	slideContainer.style.transition = "transform 0.4s ease-out"
	counter++
	slideContainer.style.transform = slideContainer.style.transform =
		"translateX(" + -100 * counter + "vw)"
})

prevBtn.addEventListener("click", () => {
   if (counter <= 0) return

	slideContainer.style.transition = "transform 0.4s ease-out"
	counter--
	slideContainer.style.transform = slideContainer.style.transform =
		"translateX(" + -100 * counter + "vw)"
})

slideContainer.addEventListener("transitionend", () => {
	if (slides[counter].id === "lastClone") {
		slideContainer.style.transition = "none"
		counter = slides.length - 2
		slideContainer.style.transform = slideContainer.style.transform =
			"translateX(" + -100 * counter + "vw)"
	}
	if (slides[counter].id === "firstClone") {
		slideContainer.style.transition = "none"
		counter = slides.length - counter
		slideContainer.style.transform = slideContainer.style.transform =
			"translateX(" + -100 * counter + "vw)"
	}
})
