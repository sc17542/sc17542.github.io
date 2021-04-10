var pageImg1 = '<img src="images/page0-1.png" alt="Page 1">';
var pageImg2 = '<img src="images/page2-3.png" alt="Pages 2-3">';
var pageImg3 = '<img src="images/page4-5.png" alt="Pages 4-5">';
var pageImg4 = '<img src="images/page6-7.png" alt="Pages 6-7">';
var pageImg5 = '<img src="images/page8-9.png" alt="Pages 8-9">';

var songVid1 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/okay.mp4" type="video/mp4"></video>';
var songVid2 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/monsters.mp4" type="video/mp4"></video>';
var songVid3 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/deardestiny.mp4" type="video/mp4"></video>';
var songVid4 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/you.mp4" type="video/mp4"></video>';
var songVid5 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/okay2.mp4" type="video/mp4"></video>';

var startButton1 = '<button onclick="playSong1()" type="button">Play</button>';
var endButton1 = '<button onclick="stopSong()" type="button">Stop</button>';

var pageContent = document.getElementById("page-content");
var buttonDiv = document.getElementById("button-div");

var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var pageNumDisplay = document.getElementById("page-num-display");

var currPageNum = 1;

function playSong1() {
    pageContent.innerHTML = songVid1;
    buttonDiv.innerHTML = endButton1;
}

function stopSong() {
    if (currPageNum == 1) {
        pageContent.innerHTML = pageImg1;
        buttonDiv.innerHTML = startButton1;
    } else if (currPageNum == 2) {
        pageContent.innerHTML = pageImg2;
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg3;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg4;
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg5;
    }
}

function goToPrevPage() {
    if (currPageNum == 2) {
        pageContent.innerHTML = pageImg1;
        pageNumDisplay.innerHTML = "1/6";
        currPageNum = 1;
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg2;
        pageNumDisplay.innerHTML = "2/6";
        currPageNum = 2;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg3;
        pageNumDisplay.innerHTML = "3/6";
        currPageNum = 3;
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg4;
        pageNumDisplay.innerHTML = "4/6";
        currPageNum = 4;
    } else if (currPageNum == 6) {
        pageContent.innerHTML = pageImg5;
        pageNumDisplay.innerHTML = "5/6";
        currPageNum = 5;
    }
    updateDisabledButtons();
}

function goToNextPage() {
    if (currPageNum == 1) {
        pageContent.innerHTML = pageImg2;
        pageNumDisplay.innerHTML = "2/6";
        currPageNum = 2;
    } else if (currPageNum == 2) {
        pageContent.innerHTML = pageImg3;
        pageNumDisplay.innerHTML = "3/6";
        currPageNum = 3;
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg4;
        pageNumDisplay.innerHTML = "4/6";
        currPageNum = 4;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg5;
        pageNumDisplay.innerHTML = "5/6";
        currPageNum = 5;
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg6;
        pageNumDisplay.innerHTML = "6/6";
        currPageNum = 6;
    }
    updateDisabledButtons();
}

updateDisabledButtons();

function updateDisabledButtons() {
    if (currPageNum == 1) {
        prevButton.disabled = true;
    } else if (currPageNum == 6) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}