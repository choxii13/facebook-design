import {rightSide} from "../container/rightsidebar.js";

export let rightSideBars = '';
rightSide.forEach((abs) => {

    rightSideBars += `   <div class = "contact-name">
    <div class = "contact-name-images">
       <img src = "${abs.profile1}">
       </div>
       <div class = "contact-name-p">
       <p>${abs.name1}</p>
       </div>
       </div>`;
});

document.querySelector('.js-container').innerHTML = rightSideBars;
