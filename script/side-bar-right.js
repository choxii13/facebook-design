const side = [{
    profile1: 'images/joshua.jpg',
    name1: 'Joshua Teoxon'
},
{
    profile1: 'images/arjhay.jpg',
    name1: 'Arjhay Adra'
},
{
    profile1: 'images/jennifer.jpg',
    name1: 'jennifer Regay'
},
{
    profile1: 'images/joyce.jpg',
    name1: 'Joyce Bataller'
},
{
    profile1: 'images/Katrina.jpg',
    name1: 'Katrina Binaya'
},
{
    profile1: 'images/kjpost.jpg',
    name1: 'Kj Aynera'
},
{
    profile1: 'images/vincent.jpg',
    name1: 'Vincent Julia'
},
];

sideBall= '';

side.forEach((abs) => {

    sideBall += `   <div class = "contact-name">
    <div class = "contact-name-images">
       <img src = "${abs.profile1}">
       </div>
       <div class = "contact-name-p">
       <p>${abs.name1}</p>
       </div>
       </div>`;
});
console.log(sideBall);
document.querySelector('.js-container').innerHTML = sideBall;
