import { mainContent } from "../container/maincontainer.js";

export let firstSideBar = "";
mainContent.forEach((main1) => {
  firstSideBar += `<div class ="main-pictures-container">
<img src = "${main1.image}" class = "main-pic">
    
<div class ="main-pictures-absolute">
<img src = "${main1.profile}">
</div>
<div class ="main-pictures-name-absolute">
<p>${main1.name}</p>
<div class = "plus-plus">
<img src = "../images/plus1.svg">
</div>
</div>
</div>

`;
});
document.querySelector(".js-set-of-pictures").innerHTML = firstSideBar;

const moveContainer = document.querySelector(".js-set-of-pictures");
const buttonRight = document.querySelector(".js-button-right");
const buttonLeft = document.querySelector(".js-button-left");
const button = {
  right: 0,
};

buttonRight.addEventListener("click", () => {
  button.right -= 110;
  moveContainer.style.setProperty("--move", button.right + "px");
  if (button.right <= 110) {
    buttonLeft.classList.add("button-left-display");
  }
  if (button.right === -1870) {
    buttonRight.classList.add("button-right-display");
  }
});

buttonLeft.addEventListener("click", () => {
  button.right += 110;
  moveContainer.style.setProperty("--move", button.right + "px");
  if (button.right === -1210) {
    buttonRight.classList.add("button-right-display");
  }
  if (button.right === 0) {
    buttonRight.classList.remove("button-right-display");
    buttonLeft.classList.remove("button-left-display");
  }
});
