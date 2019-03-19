var personatges =["Brian_Griffin","Chris_Griffin","Cleveland_Brown","Glenn_Quagmire","Joe_Swanson","Lois_Griffin","Meg_Griffin",
    "Peter_Griffin","Stewie_Griffin"];

var myVideo = document.getElementById("mainVid");
var puntuacion = 0;
var pNumber =1;
var scene_track = myVideo.textTracks[2];
// var curiositats_track = myVideo.textTracks[];
var gag_track = myVideo.textTracks[3];


$(function () {
    start_track ();
});

function click_personatge(personatge) {
    var max;
    var min;
    var rnd;
    min = 0;
    max= scene_track.cues.length-1;
    rnd = Math.round(Math.random() * (max - min) + min);
    console.log(rnd.toString());
    var info = JSON.parse(scene_track.cues[rnd].text);

    if (info.characters.includes(personatge)){
        myVideo.play();
        myVideo.currentTime=scene_track.cues[rnd].startTime.toString();
        console.log(myVideo.currentTime);
        //ja que el video s'iniciiara, canviar el boto principal de Pause a Play
        $('#control-play').find('i').removeClass('fa-play').addClass('fa-pause');
    }else{
        click_personatge(personatge)
    }
}