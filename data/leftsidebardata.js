import { leftSide } from "../container/leftsidebarcontainer.js";

export let leftSideBar = "";
leftSide.forEach((picture) => {
  leftSideBar += `
<div class = "sidebar-left-container"> 
    <div class = "sidebar-left-image-container">
    <img src = "${picture.image}" class = "sidebar-left-image"> 
    </div>
    <div class = "sidebar-left-image-container-p">
    <p class = "sidebar-left-p">${picture.name}</p>
    </div>
    </div>
`;
});

document.querySelector(".js-sidebar-left").innerHTML = leftSideBar;

const see = document.querySelector(".sidebar-left-container:nth-child(7)");
see.classList.add("ehem");
const open = document.querySelector(".sidebar-left-container:nth-child(20)");
see.addEventListener("click", () => {
  see.classList.remove("ehem");
  see.classList.add("sidebar-left-none");
});

open.addEventListener("click", () => {
  see.classList.add("ehem");
  see.classList.remove("sidebar-left-none");
});
