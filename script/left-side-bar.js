 const sideBar = [{
    image:"images/joshua.jpg",
    class:"profile-picture",
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
    name:"aamon"
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
    <div class = "sidebar-left-container js-sidebar-left-container ${picture.class}"> 
    <div class = "sidebar-left-image-container">
    <img src = "${picture.image}" class = "sidebar-left-image"> 
    </div>
    <p class = "sidebar-left-container-name">${picture.name}</p>
    </div>
    </div>`
    ;
});


document.querySelector('.sidebar-left').innerHTML = leftSideBar;
console.log(leftSideBar);