data = [{
  name: simret
}
]
let currentSlid = 0;//current slide
let tottalSlides = 4;// total slides

const radios = document.querySelectorAll(".radio-container__btn")
const images = document.querySelectorAll(".slider__card__list-img")
console.log(images)
// toogling buttons
function next() {
  document.getElementById("img" + (currentSlid + 1)).
    classList.remove("show-img");
  currentSlid = (tottalSlides + currentSlid + 1) % tottalSlides;
  document.getElementById("img" + (currentSlid + 1)).classList.add("show-img")
  radioToogle(currentSlid + 1);
}
function prev() {
  document.getElementById("img" + (currentSlid + 1)).
    classList.remove("show-img");
  currentSlid = (tottalSlides + currentSlid + 1) % tottalSlides;
  document.getElementById("img" + (currentSlid + 1)).classList.add("show-img")
  radioToogle(i + 1);
}
let radioToogle = (num) => {
  radios.forEach(radio => {
    radio.style.backgroundColor = "white"
  });
  document.querySelector(".radio-container button:nth-child(" + num + ")").style.backgroundColor = "#6E4A9E";
}
// togling rodio buttons

// let imagNav = (index) => {
//   images.forEach(image => {
//     image.classList.remove("show-img")
//   });
//   document.getElementById("img" + index).classList.add("show-img")
//   i = index - 1;
//   radioToogle(index);
// }

