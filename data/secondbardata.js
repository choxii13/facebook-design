import {secondBar} from "../container/secondbarcontainer.js"; 

export let secondPicture = '';
secondBar.forEach((second) => {
   secondPicture +=
    `     <div class = "main-div-second-layer">
    <div class = "main-div-second-layer-profile">
        <div class = "main-div-second-layer-profile-a">
            <img src="${second.profile}">
        <div class="main-div-second-layer-profile-b"> 
            <p class= "name-josh"> ${second.name}</p>
        <div class="main-div-second-layer-profile-c">
            <p>${second.hours}</p>
            <p>.</p>
            <img src ="images/friendss.png">
        </div>
         
        </div>
        
    </div>
 <div class = "main-div-second-layer-profile-aa">
        <img src = "images/3-dot.png">
        <img src = "images/close.png">
    </div>
 
</div>
<p> ${second.post}</p>
<div class = "main-div-second-layer-picture-div"> 
<div class = "main-div-second-layer-picture">
<img src="${second.image}"> 
</div>
</div>
<div class = "main-div-second-layer-container">
    <div class  = "main-div-second-layer-heart">
    <img src = "images/heart.png">
    <p> ${second.like}</p>
    <div class = "like-like">
        <img src = "images/like.png">
    </div>
    </div>
<div class = "main-div-second-layer-comment-share">
    <div class = "main-div-second-layer-comment">
        <p>${second.comment}</p>
        <img src = "images/comments.png">
    </div>
    <div class = "main-div-second-layer-share">
        <p>${second.share}</p>
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
        <img src = "${second.profile}" class ="up">
        <img src = "images/down.png" class = "down">
    </div> 
</div>
</div>`;
});

document.querySelector('.js-main-div-second-layer').innerHTML =   secondPicture ;
