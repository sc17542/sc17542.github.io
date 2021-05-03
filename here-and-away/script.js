var pageImg0 = '<img src="images/cover-page.png" alt="Cover page">';
var pageImg1 = '<img src="images/page0-1.png" alt="Page 1">';
var pageImg2 = '<img src="images/page2-3.png" alt="Pages 2-3">';
var pageImg3 = '<img src="images/page4-5.png" alt="Pages 4-5">';
var pageImg4 = '<img src="images/page6-7.png" alt="Pages 6-7">';
var pageImg5 = '<img src="images/page8-9.png" alt="Pages 8-9">';
var pageImg6 = '<img src="images/page10-11.png" alt="Pages 10-11">';

var songVid1 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/okay.mp4" type="video/mp4"></video>';
var songVid2 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/monsters.mp4" type="video/mp4"></video>';
var songVid3 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/deardestiny.mp4" type="video/mp4"></video>';
var songVid4 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/you.mp4" type="video/mp4"></video>';
var songVid5 = '<video width="100%" autoplay onended="stopSong()"><source src="videos/okayreprise.mp4" type="video/mp4"></video>';

var startButton1 = '<button id="song-button-1" class="song-buttons font-patrick-hand" onclick="playSong1()" type="button">Play Song #1</button>';
var endButton1 = '<button id="song-button-1" class="song-buttons font-patrick-hand" onclick="stopSong()" type="button">Stop Song #1</button>';

var startButton2 = '<button id="song-button-2" class="song-buttons font-patrick-hand" onclick="playSong2()" type="button">Play Song #2</button>';
var endButton2 = '<button id="song-button-2" class="song-buttons font-patrick-hand" onclick="stopSong()" type="button">Stop Song #2</button>';

var startButton3 = '<button id="song-button-3" class="song-buttons font-patrick-hand" onclick="playSong3()" type="button">Play Song #3</button>';
var endButton3 = '<button id="song-button-3" class="song-buttons font-patrick-hand" onclick="stopSong()" type="button">Stop Song #3</button>';

var startButton4 = '<button id="song-button-4" class="song-buttons font-patrick-hand" onclick="playSong4()" type="button">Play Song #4</button>';
var endButton4 = '<button id="song-button-4" class="song-buttons font-patrick-hand" onclick="stopSong()" type="button">Stop Song #4</button>';

var startButton5 = '<button id="song-button-5" class="song-buttons font-patrick-hand" onclick="playSong5()" type="button">Play Song #5</button>';
var endButton5 = '<button id="song-button-5" class="song-buttons font-patrick-hand" onclick="stopSong()" type="button">Stop Song #5</button>';

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

function playSong2() {
    pageContent.innerHTML = songVid2;
    buttonDiv.innerHTML = endButton2;
    setTimeout(function(){
        currPageNum = 4;
        pageNumDisplay.innerHTML = "4/7";
    }, 50000);
}

function playSong3() {
    pageContent.innerHTML = songVid3;
    buttonDiv.innerHTML = endButton3;
}

function playSong4() {
    pageContent.innerHTML = songVid4;
    buttonDiv.innerHTML = endButton4;
    setTimeout(function(){
        currPageNum = 7;
        pageNumDisplay.innerHTML = "7/7";
    }, 39000);
}

function playSong5() {
    pageContent.innerHTML = songVid5;
    buttonDiv.innerHTML = endButton5;
}

function stopSong() {
    if (currPageNum == 1) {
        pageContent.innerHTML = pageImg0;
    } else if (currPageNum == 2) {
        pageContent.innerHTML = pageImg1;
        buttonDiv.innerHTML = startButton1;
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg2;
        buttonDiv.innerHTML = startButton2;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg3;
        buttonDiv.innerHTML = startButton3;
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg4;
    } else if (currPageNum == 6) {
        pageContent.innerHTML = pageImg5;
        buttonDiv.innerHTML = startButton4;
    } else if (currPageNum == 7) {
        pageContent.innerHTML = pageImg6;
        buttonDiv.innerHTML = startButton5;
    }
}

function goToPrevPage() {
    if (currPageNum == 2) {
        pageContent.innerHTML = pageImg0;
        pageNumDisplay.innerHTML = "1/7";
        currPageNum = 1;
        buttonDiv.innerHTML = "";
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg1;
        pageNumDisplay.innerHTML = "2/7";
        currPageNum = 2;
        buttonDiv.innerHTML = startButton1;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg2;
        pageNumDisplay.innerHTML = "3/7";
        currPageNum = 3;
        buttonDiv.innerHTML = startButton2;
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg3;
        pageNumDisplay.innerHTML = "4/7";
        currPageNum = 4;
        buttonDiv.innerHTML = startButton3;
    } else if (currPageNum == 6) {
        pageContent.innerHTML = pageImg4;
        pageNumDisplay.innerHTML = "5/7";
        currPageNum = 5;
        buttonDiv.innerHTML = "";
    } else if (currPageNum == 7) {
        pageContent.innerHTML = pageImg5
        pageNumDisplay.innerHTML = "6/7";
        currPageNum = 6;
        buttonDiv.innerHTML = startButton4;
    }
    updateDisabledButtons();
}

function goToNextPage() {
    if (currPageNum == 1) {
        pageContent.innerHTML = pageImg1;
        pageNumDisplay.innerHTML = "2/7";
        currPageNum = 2;
        buttonDiv.innerHTML = startButton1;
    } else if (currPageNum == 2) {
        pageContent.innerHTML = pageImg2;
        pageNumDisplay.innerHTML = "3/7";
        currPageNum = 3;
        buttonDiv.innerHTML = startButton2;
    } else if (currPageNum == 3) {
        pageContent.innerHTML = pageImg3;
        pageNumDisplay.innerHTML = "4/7";
        currPageNum = 4;
        buttonDiv.innerHTML = startButton3;
    } else if (currPageNum == 4) {
        pageContent.innerHTML = pageImg4;
        pageNumDisplay.innerHTML = "5/7";
        currPageNum = 5;
        buttonDiv.innerHTML = "";
    } else if (currPageNum == 5) {
        pageContent.innerHTML = pageImg5;
        pageNumDisplay.innerHTML = "6/7";
        currPageNum = 6;
        buttonDiv.innerHTML = startButton4;
    } else if (currPageNum == 6) {
        pageContent.innerHTML = pageImg6;
        pageNumDisplay.innerHTML = "7/7";
        currPageNum = 7;
        buttonDiv.innerHTML = startButton5;
    }
    updateDisabledButtons();
}

updateDisabledButtons();

function updateDisabledButtons() {
    if (currPageNum == 1) {
        prevButton.disabled = true;
        prevButton.style.opacity = 0.6;
    } else if (currPageNum == 7) {
        nextButton.disabled = true;
        nextButton.style.opacity = 0.6;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
        prevButton.style.opacity = 1;
        nextButton.style.opacity = 1;
    }
}


