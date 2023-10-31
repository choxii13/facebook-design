import {mainContent} from "../container/maincontainer.js";

export let secondPicture = '';
mainContent.forEach((main) => {
   secondPicture +=
    `     <div class = "main-div-second-layer">
    <div class = "main-div-second-layer-profile">
        <div class = "main-div-second-layer-profile-a">
            <img src="${main.profile}" class = "profile-image">
        <div class="main-div-second-layer-profile-b"> 
            <p class= "name-josh"> ${main.name}</p>
        <div class="main-div-second-layer-profile-c">
            <p class = "hours">${main.hours}</p>
            <p>.</p>
            <img src ="images/friendss.png">
        </div>
         
        </div> 
    </div>
 <div class = "main-div-second-layer-profile-aa">
 <div class = "dot-dot-dot">
        <img src = "images/3-dot.png">
        </div>
        <div class = "ekis-close"> 
        <img src = "images/close.png">
        </div>
    </div>
 
</div>
<p> ${main.post}</p>
<div class = "main-div-second-layer-picture-div"> 
<div class = "main-div-second-layer-picture">
<img src="${main.image}"> 
</div>
</div>
<div class = "main-div-second-layer-container">
    <div class  = "main-div-second-layer-heart">
    <img src = "images/heart.png">
    <p> ${main.like}</p>
    <div class = "like-like">
        <img src = "images/like.png">
    </div>
    </div>
<div class = "main-div-second-layer-comment-share">
    <div class = "main-div-second-layer-comment">
        <p>${main.comment}</p>
        <img src = "images/comments.png">
    </div>
    <div class = "main-div-second-layer-share">
        <p>${main.share}</p>
        <img src = "images/share.png">
    </div>
</div>
</div>
<hr>
<div class = "like-comment-share">

    <div class = "like"> 
        <div class = "like-container">
        <img src = "images/like1.png">
        <p> Like</p>
    </div>
    </div>
    
    <div class = "like"> 
        <div class = "like-container">
        <img src = "images/bubble-chat.png">
        <p> Comment</p>
    </div>
    </div>
    <div class = "like"> 
        <div class = "like-container">
        <img src = "images/share2.png">
        <p> Share</p>
    </div>
    </div>

    <div class = "like-comment-profile-container">
        <img src = "${main.profile}" class ="up">
        <img src = "images/down.png" class = "down">
    </div> 
</div>
</div>`;
});

document.querySelector('.js-main-div-second-layer').innerHTML =   secondPicture ;
document.querySelector(`.main-pictures-container:nth-child(1) > 
div:nth-child(3) p`).innerHTML = "Create Story";
