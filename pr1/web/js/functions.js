$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    init_video_controls();
    init_subtitles();
});


function init_subtitles() {
    // http://ronallo.com/blog/html5-video-caption-cue-settings-tester/ 		Styling cues
    const languages = {'en': 0, 'pt': 1};

    $('.set-subtitle').click(function () {
        // amagar tots els tracks
        for (let i = 0; i < myVideo.textTracks.length; i++) myVideo.textTracks[i].mode = 'hidden';
        //mostrar nomes aquell track de subtitols
        console.log("mostrar nomes aquell track de subtitols");
        myVideo.textTracks[languages[$(this).attr('lang')]].mode = 'showing';
        $(this).attr('data-state', 'active')
    });

    $('#control-no-sub').click(function () {
        //amagar tots els subtitols
        console.log("amagar tots els subtitols");
        for (let i = 0; i < myVideo.textTracks.length; i++) myVideo.textTracks[i].mode = 'hidden';
    });
}