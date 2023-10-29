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

document.querySelector()


// seeMore = document.querySelector('.sidebar-left-container:nth-child(6)');
// seeMores = document.querySelectorAll('.sidebar-left-container');
// eyy = document.querySelector('.sidebar-left-container:nth-last-child(7)');
// seeMore.addEventListener('click', () => {
//     eyy.classList.add('ehem');
// });
