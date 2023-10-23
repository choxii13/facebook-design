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

let pixel = 0;
function addPixel() {
    const joshuas = document.querySelector('.js-set-of-pictures');
        joshuas.classList.add('move-pictures');
        pixel-=115;
        joshuas.style.setProperty('--move', pixel + "px");
 }
