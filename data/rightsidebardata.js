import {rightSide} from "../container/rightsidebarcontainer.js";

export let rightSideBar = '';
rightSide.forEach((abs) => {

    rightSideBar += `   <div class = "contact-name">
    <div class = "contact-name-images">
       <img src = "${abs.profile1}">
       </div>
       <div class = "contact-name-p">
       <p>${abs.name1}</p>
       </div>
       </div>`;
});
document.querySelector('.js-container').innerHTML = rightSideBar;
