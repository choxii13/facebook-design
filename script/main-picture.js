const savePictures = [{
    images: "images/joshua.jpg"
}, 
{
    images: "images/brody.jfif"
},
{
    images: "images/claude.webp"
},
{
    images: "images/lapu.webp"
},
{
    images: "images/gela.jpg"
},
{
    images: "images/lesly.webp"
},
{
    images: "images/yz.jpg"
},
{
    images: "images/Aamon.jpg"
},
{
    images: "images/Alucard.jpg"
},
{
    images: "images/guineverre.webp"
},
{
    images: "images/gusion.jpg"
},
{
    images: "images/ling.webp"
}

];


pictures = '';
savePictures.forEach((picture) => {
pictures += `<div class ="main-pictures-container">
<img src = "${picture.images}">
</div>
`;

});


document.querySelector('.js-set-of-pictures').innerHTML = pictures;


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