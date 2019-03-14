$(function () {
	$('[data-toggle="tooltip"]').tooltip()
	init_video_controls();
	init_subtitles();
});


function init_subtitles () {
	// http://ronallo.com/blog/html5-video-caption-cue-settings-tester/ 		Styling cues
	var languages = {'eng': 1, 'pt': 2}

	$('.set-subtitle').click(function () {
		for (var i = 0; i < myVideo.textTracks.length; i++) myVideo.textTracks[i].mode = 'hidden';
		myVideo.textTracks[languages[$(this).attr('lan')]].mode = 'showing'
		$(this).attr('data-state', 'active')
	})

	$('#control-no-sub').click(function () {
		for (var i = 0; i < myVideo.textTracks.length; i++) myVideo.textTracks[i].mode = 'hidden';
	})
}