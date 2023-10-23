export const savePictures = [{
    image: "sad"
},
 {
    image: "sad"
 },
];

const mainPictures =    `
<button class = "button-left js-button-left" onclick = "addPixel();"> > </button>
<div class = "set-of-pictures js-set-of-pictures"> 
<div >
<img src = "images/joshua.jpg">
</div>
<div>
<img src = "images/gela.jpg">
</div>
<div>
<img src = "images/YZ.jpg">
</div>
<div>
<img src = "images/lesly.webp">
</div>
<div>
<img src = "images/lapu.webp">
</div>
<div>
<img src = "images/brody.jfif"> 
</div>
<div>
<img src = "images/claude.webp"> 
</div>
<div>
    <img src = "images/harl.jpg"> 
</div>
</div>`;
console.log(savePictures);
document.querySelector('.js-set-of-pictures-hide').innerHTML = mainPictures;

let pixel = 0;
function addPixel() {
    const joshuas = document.querySelector('.js-set-of-pictures');
        joshuas.classList.add('move-pictures');
        pixel-=115;
        joshuas.style.setProperty('--was', pixel + "px");
 }

