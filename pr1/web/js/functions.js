var video = document.getElementById('video-tag');

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
	init_video_controls()
	init_canvas_functions()
	init_filter_functions()
	init_scene_tracking()
	init_subtitles()
})


function init_subtitles () {
	// http://ronallo.com/blog/html5-video-caption-cue-settings-tester/ 		Styling cues
	var languages = {'eng': 1, 'pt': 2}

	$('.set-subtitle').click(function () {
		for (var i = 0; i < video.textTracks.length; i++) video.textTracks[i].mode = 'hidden';
		video.textTracks[languages[$(this).attr('lan')]].mode = 'showing'
		$(this).attr('data-state', 'active')
	})

	$('#control-no-sub').click(function () {
		for (var i = 0; i < video.textTracks.length; i++) video.textTracks[i].mode = 'hidden';
	})
}