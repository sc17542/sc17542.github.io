var aboutImg = document.getElementById("about-img");


function randomizeAboutImg() {
    var randImgNum = Math.floor(Math.random() * 5) + 1;
    aboutImg.src = "images/about-pictures/about-picture" + randImgNum.toString() + ".png";
}


