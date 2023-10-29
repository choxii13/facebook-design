import {firstBar} from '../container/firstbarcontainer.js';

export let firstSideBar = '';
firstBar.forEach((picture) => {
    firstSideBar += `<div class ="main-pictures-container">
<img src = "${picture.images}">
</div>
`;
});
document.querySelector('.js-set-of-pictures').innerHTML =  firstSideBar;


const moveContainer = document.querySelector('.js-set-of-pictures');
const buttonRight = document.querySelector('.js-button-right');
const buttonLeft = document.querySelector('.js-button-left');
const button = {
    right:0
};
buttonRight.addEventListener('click', () => {
    button.right-=110;
    moveContainer.style.setProperty('--move', button.right + "px");  
    if (button.right <=110){
        buttonLeft.classList.add('button-left-display'); 
    } 
    if (button.right ===-1210) {
        buttonRight.classList.add('button-right-display');
    }
  
});


buttonLeft.addEventListener('click', () => {
    button.right+=110;   
    moveContainer.style.setProperty('--move',   button.right+ "px"); 
    if (button.right ===-1210) {
        buttonRight.classList.add('button-right-display');
    }
    if (button.right === 0){
        buttonRight.classList.remove('button-right-display');
        buttonLeft.classList.remove('button-left-display'); 
    } 

});