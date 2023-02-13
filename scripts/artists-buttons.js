let artists_buttons = document.querySelectorAll(".item-exhib__button");
let artists_blocks = document.querySelectorAll(".item-exhib__artists");
let artists_arrows = document.querySelectorAll(".item-exhib__button-arrow");

for (var i = 0; i < artists_buttons.length; i++) {
    let btn = artists_buttons[i];
    let block = artists_blocks[i];
    let arrow = artists_arrows[i];
    
    btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    block.classList.toggle("visible");
    arrow.classList.toggle("artists-click");
  })
}