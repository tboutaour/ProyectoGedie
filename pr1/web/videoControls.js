var myVideo = document.getElementById("mainVid");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function restart(){
    myVideo.currentTime = 0;
    myVideo.play();
}

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}

function mutear() {
    if (myVideo.muted)
        myVideo.muted = false;
    else
        myVideo.muted = true;
}