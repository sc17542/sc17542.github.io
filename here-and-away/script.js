
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

var leftSongBtnDiv = document.getElementById("left-song-btn-div");
var rightSongBtnDiv = document.getElementById("right-song-btn-div");

var onePageButton = document.getElementById("one-page-button");
var twoPageButton = document.getElementById("two-page-button");
var zoomInButton = document.getElementById("zoom-in-button");
var zoomOutButton = document.getElementById("zoom-out-button");

var coverPage = document.getElementById("cover-page");
var page01 = document.getElementById("page0-1");
var page23 = document.getElementById("page2-3");
var page45 = document.getElementById("page4-5");
var page67 = document.getElementById("page6-7");
var page89 = document.getElementById("page8-9");
var page1011 = document.getElementById("page10-11");

var songVideoDiv = document.getElementById("song-video-div");

var video1 = document.getElementById("video-1");
var video2 = document.getElementById("video-2");
var video3 = document.getElementById("video-3");
var video4 = document.getElementById("video-4");
var video5 = document.getElementById("video-5");

var currPageSize = 960;

var inTwoPageView = true;


coverPage.style.opacity = 1;
page01.style.opacity = 0;
page23.style.opacity = 0;
page45.style.opacity = 0;
page67.style.opacity = 0;
page89.style.opacity = 0;
page1011.style.opacity = 0;

function playSong1() {
//    pageContent.innerHTML = songVid1;
//    songVideoDiv.innerHTML = '<video width="' + currPageSize.toString() + 'px" autoplay onended="stopSong()"><source src="videos/okay.mp4" type="video/mp4"></video>';
    video1.style.opacity = 1;
    video1.play();
    page01.style.opacity = 0;
//    buttonDiv.innerHTML = endButton1;
    rightSongBtnDiv.innerHTML = endButton1;
}

function playSong2() {
//    pageContent.innerHTML = songVid2;
//    songVideoDiv.innerHTML = '<video width="' + currPageSize.toString() + 'px" autoplay onended="stopSong()"><source src="videos/monsters.mp4" type="video/mp4"></video>';
    video2.style.opacity = 1;
    video2.play();
    page23.style.opacity = 0;
//    buttonDiv.innerHTML = endButton2;
    rightSongBtnDiv.innerHTML = endButton2;
    setTimeout(function(){
        currPageNum = 4;
        pageNumDisplay.innerHTML = "4/7";
    }, 50000);
}

function playSong3() {
//    pageContent.innerHTML = songVid3;
//    songVideoDiv.innerHTML = '<video width="' + currPageSize.toString() + 'px" autoplay onended="stopSong()"><source src="videos/deardestiny.mp4" type="video/mp4"></video>';
    video3.style.opacity = 1;
    video3.play();
    page45.style.opacity = 0;
//    buttonDiv.innerHTML = endButton3;
    leftSongBtnDiv.innerHTML = endButton3;
}

function playSong4() {
//    pageContent.innerHTML = songVid4;
//    songVideoDiv.innerHTML = '<video width="' + currPageSize.toString() + 'px" autoplay onended="stopSong()"><source src="videos/you.mp4" type="video/mp4"></video>';
    video4.style.opacity = 1;
    video4.play();
    page89.style.opacity = 0;
//    buttonDiv.innerHTML = endButton4;
    rightSongBtnDiv.innerHTML = endButton4;
    setTimeout(function(){
        currPageNum = 7;
        pageNumDisplay.innerHTML = "7/7";
        nextButton.disabled = true;
        nextButton.style.opacity = 0.6;
    }, 39000);
}

function playSong5() {
//    pageContent.innerHTML = songVid5;
//    songVideoDiv.innerHTML = '<video width="' + currPageSize.toString() + 'px" autoplay onended="stopSong()"><source src="videos/okayreprise.mp4" type="video/mp4"></video>';
    video5.style.opacity = 1;
    video5.play();
    page1011.style.opacity = 0;
//    buttonDiv.innerHTML = endButton5;
    rightSongBtnDiv.innerHTML = endButton5;
}

function stopSong() {
    if (currPageNum == 1) {
//        pageContent.innerHTML = pageImg0;
        coverPage.style.opacity = 1;
    } else if (currPageNum == 2) {
//        pageContent.innerHTML = pageImg1;
        video1.style.opacity = 0;
        video1.pause();
        video1.currentTime = 0;
        page01.style.opacity = 1;
//        buttonDiv.innerHTML = startButton1;
        rightSongBtnDiv.innerHTML = startButton1;
    } else if (currPageNum == 3) {
//        pageContent.innerHTML = pageImg2;
        video2.style.opacity = 0;
        video2.pause();
        video2.currentTime = 0;
        page23.style.opacity = 1;
//        buttonDiv.innerHTML = startButton2;
        rightSongBtnDiv.innerHTML = startButton2;
    } else if (currPageNum == 4) {
//        pageContent.innerHTML = pageImg3;
        video3.style.opacity = 0;
        video3.pause();
        video3.currentTime = 0;
        page45.style.opacity = 1;
//        buttonDiv.innerHTML = startButton3;
        leftSongBtnDiv.innerHTML = startButton3;
        rightSongBtnDiv.innerHTML = "";
    } else if (currPageNum == 5) {
//        pageContent.innerHTML = pageImg4;
        page67.style.opacity = 1;
    } else if (currPageNum == 6) {
//        pageContent.innerHTML = pageImg5;
        video4.style.opacity = 0;
        video4.pause();
        video4.currentTime = 0;
        page89.style.opacity = 1;
//        buttonDiv.innerHTML = startButton4;
        rightSongBtnDiv.innerHTML = startButton4;
    } else if (currPageNum == 7) {
//        pageContent.innerHTML = pageImg6;
        video5.style.opacity = 0;
        video5.pause();
        video5.currentTime = 0;
        page1011.style.opacity = 1;
//        buttonDiv.innerHTML = startButton5;
        rightSongBtnDiv.innerHTML = startButton5;
    }
//    songVideoDiv.innerHTML = "";
}

function goToPrevPage() {
    if (currPageNum == 2) {
//        pageContent.innerHTML = pageImg0;
        coverPage.style.opacity = 1;
        page01.style.opacity = 0;
        pageNumDisplay.innerHTML = "1/7";
        currPageNum = 1;
//        buttonDiv.innerHTML = "";
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = "";
        video1.style.opacity = 0;
        video1.pause();
        video1.currentTime = 0;
    } else if (currPageNum == 3) {
//        pageContent.innerHTML = pageImg1;
        page01.style.opacity = 1;
        page23.style.opacity = 0;
        pageNumDisplay.innerHTML = "2/7";
        currPageNum = 2;
//        buttonDiv.innerHTML = startButton1;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton1;
        video2.style.opacity = 0;
        video2.pause();
        video2.currentTime = 0;
    } else if (currPageNum == 4) {
//        pageContent.innerHTML = pageImg2;
        page23.style.opacity = 1;
        page45.style.opacity = 0;
        pageNumDisplay.innerHTML = "3/7";
        currPageNum = 3;
//        buttonDiv.innerHTML = startButton2;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton2;
        video2.style.opacity = 0;
        video2.pause();
        video2.currentTime = 0;
        video3.style.opacity = 0;
        video3.pause();
        video3.currentTime = 0;
    } else if (currPageNum == 5) {
//        pageContent.innerHTML = pageImg3;
        page45.style.opacity = 1;
        page67.style.opacity = 0;
        pageNumDisplay.innerHTML = "4/7";
        currPageNum = 4;
//        buttonDiv.innerHTML = startButton3;
        leftSongBtnDiv.innerHTML = startButton3;
        rightSongBtnDiv.innerHTML = "";
    } else if (currPageNum == 6) {
//        pageContent.innerHTML = pageImg4;
        page67.style.opacity = 1;
        page89.style.opacity = 0;
        pageNumDisplay.innerHTML = "5/7";
        currPageNum = 5;
//        buttonDiv.innerHTML = "";
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = "";
        video4.style.opacity = 0;
        video4.pause();
        video4.currentTime = 0;
    } else if (currPageNum == 7) {
//        pageContent.innerHTML = pageImg5;
        page89.style.opacity = 1;
        page1011.style.opacity = 0;
        pageNumDisplay.innerHTML = "6/7";
        currPageNum = 6;
//        buttonDiv.innerHTML = startButton4;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton4;
        video5.style.opacity = 0;
        video5.pause();
        video5.currentTime = 0;
    }
//    songVideoDiv.innerHTML = "";
    updateDisabledButtons();
}

function goToNextPage() {
    if (currPageNum == 1) {
//        pageContent.innerHTML = pageImg1;
        coverPage.style.opacity = 0;
        page01.style.opacity = 1;
        pageNumDisplay.innerHTML = "2/7";
        currPageNum = 2;
//        buttonDiv.innerHTML = startButton1;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton1;
    } else if (currPageNum == 2) {
//        pageContent.innerHTML = pageImg2;
        page01.style.opacity = 0;
        page23.style.opacity = 1;
        pageNumDisplay.innerHTML = "3/7";
        currPageNum = 3;
//        buttonDiv.innerHTML = startButton2;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton2;
        video1.style.opacity = 0;
        video1.pause();
        video1.currentTime = 0;
    } else if (currPageNum == 3) {
//        pageContent.innerHTML = pageImg3;
        page23.style.opacity = 0;
        page45.style.opacity = 1;
        pageNumDisplay.innerHTML = "4/7";
        currPageNum = 4;
//        buttonDiv.innerHTML = startButton3;
        leftSongBtnDiv.innerHTML = startButton3;
        rightSongBtnDiv.innerHTML = "";
        video2.style.opacity = 0;
        video2.pause();
        video2.currentTime = 0;
    } else if (currPageNum == 4) {
//        pageContent.innerHTML = pageImg4;
        page45.style.opacity = 0;
        page67.style.opacity = 1;
        pageNumDisplay.innerHTML = "5/7";
        currPageNum = 5;
//        buttonDiv.innerHTML = "";
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = "";
        video2.style.opacity = 0;
        video2.pause();
        video2.currentTime = 0;
        video3.style.opacity = 0;
        video3.pause();
        video3.currentTime = 0;
    } else if (currPageNum == 5) {
//        pageContent.innerHTML = pageImg5;
        page67.style.opacity = 0;
        page89.style.opacity = 1;
        pageNumDisplay.innerHTML = "6/7";
        currPageNum = 6;
//        buttonDiv.innerHTML = startButton4;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton4;
    } else if (currPageNum == 6) {
//        pageContent.innerHTML = pageImg6;
        page89.style.opacity = 0;
        page1011.style.opacity = 1;
        pageNumDisplay.innerHTML = "7/7";
        currPageNum = 7;
//        buttonDiv.innerHTML = startButton5;
        leftSongBtnDiv.innerHTML = "";
        rightSongBtnDiv.innerHTML = startButton5;
        video4.style.opacity = 0;
        video4.pause();
        video4.currentTime = 0;
    }
//    songVideoDiv.innerHTML = "";
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

function zoomIn() {
    if (currPageSize < 3840) {
        currPageSize += 480;
    }
    updatePageSize();
}

function zoomOut() {
    if (currPageSize > 960) {
        currPageSize -= 480;
    }
    updatePageSize();
}

function updatePageSize() {
    coverPage.style.width = currPageSize.toString() + "px";
    page01.style.width = currPageSize.toString() + "px";
    page23.style.width = currPageSize.toString() + "px";
    page45.style.width = currPageSize.toString() + "px";
    page67.style.width = currPageSize.toString() + "px";
    page89.style.width = currPageSize.toString() + "px";
    page1011.style.width = currPageSize.toString() + "px";
    video1.style.width = currPageSize.toString() + "px";
    video2.style.width = currPageSize.toString() + "px";
    video3.style.width = currPageSize.toString() + "px";
    video4.style.width = currPageSize.toString() + "px";
    video5.style.width = currPageSize.toString() + "px";
    
    if (currPageSize == 960) {
        pageContent.style.display = "flex";
    } else {
        pageContent.style.display = "inherit";
    }
}

function changeToOnePageView() {
    inTwoPageView = false;
}

function changeToTwoPageView() {
    inTwoPageView = true;
}
