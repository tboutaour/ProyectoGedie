function start_track () {
    myVideo.addEventListener('loadeddata', function() {
        var scene_track = myVideo.textTracks[2];
        scene_track.mode = 'showing';
        // Cada vez que se cambie el cue: Actualizamos panel de informacion de escena (t characters y screenshots)
        scene_track.oncuechange = function(e) {
            element = document.getElementById('Personatges');
            var siblings = element.childNodes;
            var personatge;
            for (s in personatges){
                personatge = document.getElementById(personatges[s]);
                personatge.style.opacity="0.2";
            }
            var activeCue = scene_track.activeCues[0];
            if (activeCue) {
                var info = JSON.parse(activeCue.text);
                for (i in info.characters){
                    console.log(info.characters[i]);
                    element = document.getElementById(info.characters[i]);
                    element.style.opacity="0.9";
                }
            }
        };
    }, false);
}