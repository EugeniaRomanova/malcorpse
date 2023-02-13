let interview_button = document.querySelector(".nav-header__button_i");
let interview_block = document.querySelector(".interview-block");

let links_button = document.querySelector(".nav-header__button_l");
let links_block = document.querySelector(".links-block");

interview_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  links_block.classList.remove("visible");
  interview_block.classList.toggle("visible");
})

links_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  interview_block.classList.remove("visible");
  links_block.classList.toggle("visible");
})