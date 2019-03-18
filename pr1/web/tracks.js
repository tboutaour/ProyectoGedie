function start_track () {
    myVideo.addEventListener('loadeddata', function() {
        console.log("He acabado el load");
        scene_track.mode = 'showing';
        gag_track.mode = 'showing';
    }, false);
        // Cada vez que se cambie el cue: Actualizamos panel de informacion de escena (t characters y screenshots)
        var modal = document.getElementById('myModal')
        //modal.style.display = "none";
        scene_track.oncuechange = function() {
            element = document.getElementById('Personatges');
            for (s in personatges){
                personatge = document.getElementById(personatges[s]);
                personatge.style.opacity="0.2";
            }
            var activeCue = scene_track.activeCues[0];
            if (activeCue) {
                var info = JSON.parse(activeCue.text);
                for (i in info.characters){
                    console.log(info.characters[i]);
                    console.log(myVideo.currentTime);
                    element = document.getElementById(info.characters[i]);
                    element.style.opacity="0.9";
                }
            }
        };
        console.log(scene_track);
        console.log(gag_track);

        gag_track.oncuechange = function() {
            var gagActiveCue = gag_track.activeCues[0];
            if (gagActiveCue){
                var gagInfo = JSON.parse(gagActiveCue.text);
                myVideo.pause();
                document.getElementById("gagTitol").innerHTML = gagInfo.titol;
                document.getElementById("gagImage").src=gagInfo.captura;
                modal.style.display = "block";
            }
        };
}
function quitarModalyGuardar(valor) {
        modal.style.display = "none";
        myVideo.play();
        puntuacion = puntuación + valor;
}