import { mainContent } from "../container/maincontainer.js";

export let rightSideBar = "";
mainContent.forEach((mainRight) => {
  rightSideBar += `   <div class = "contact-name">
    <div class = "contact-name-images">
       <img src = "${mainRight.profile}">
       </div>
       <div class = "contact-name-p">
       <p>${mainRight.name}</p>
       </div>
       </div>`;
});
document.querySelector(".js-container").innerHTML = rightSideBar;
