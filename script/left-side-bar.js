 const sideBar = [{
    image:"images/joshua.jpg",
    name:"Joshua Teoxon"
},
{
    image:"images/friends.png",
    name:"Friends"
},
{
    image:"images/clock.png",
    name:"Memories"
},
{
    image:"images/save.png",
    name:"Saved"
},
{
    image:"images/groups.png",
    name:"Groups"
},
{
    image:"images/marketplace.png",
    name:"Marketplace"
},
{
    image:"images/feeds.png",
    name:"Feeds"
},
{
    image:"images/AdCenter.png",
    name:"Ad Center"
},
{
    image:"images/ads-manager.png",
    name:"Ads Manager"
},
{
    image:"images/blood-donation.png",
    name:"Blood Donation"
},
{
    image:"images/Aamon.jpg",
    name:"aamsadsad asd sadsa "
},
{
    image:"images/Aamon.jpg",
    name:"aamon"
},
{
    image:"images/Aamon.jpg",
    name:"aamon"
},
{
    image:"images/Aamon.jpg",
    name:"aamon"
}
,
{
    image:"images/Aamon.jpg",
    name:"aamon"
},
{
    image:"images/Aamon.jpg",
    name:"aamon"
},
{
    image:"images/Aamon.jpg",
    name:"aamon"
}

];

leftSideBar = '';
sideBar.forEach((picture) =>{
    leftSideBar += `
<div class = "sidebar-left-container"> 
    <div class = "sidebar-left-image-container">
    <img src = "${picture.image}" class = "sidebar-left-image"> 
    </div>
    <div class = "sidebar-left-image-container-p">
    <p class = "sidebar-left-p">${picture.name}</p>
    </div>
    </div>`
    ;
});


document.querySelector('.js-sidebar-left').innerHTML = leftSideBar;
