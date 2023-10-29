import {leftSide} from '../container/leftsidebarcontainer.js';

export let leftSideBar = '';
leftSide.forEach((picture) =>{
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

document.querySelector('.js-sidebar-left').innerHTML  = leftSideBar;

