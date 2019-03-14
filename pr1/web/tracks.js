function start_track () {
    myVideo.addEventListener('loadeddata', function() {
        scene_track.mode = 'showing';
        // Cada vez que se cambie el cue: Actualizamos panel de informacion de escena (t characters y screenshots)
        var modal = document.getElementById('myModal')
        scene_track.oncuechange = function(e) {
            //modal.style.display = "block";
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



    }, false);
}