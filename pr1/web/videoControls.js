function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function restart(){
    var videoss = document.getElementById("mainVid");
    console.log(videoss.currentTime);
    videoss.currentTime = "540";
    console.log(videoss.currentTime);
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