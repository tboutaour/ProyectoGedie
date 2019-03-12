var last_volume = 0

function init_video_controls () {
	video.addEventListener('loadedmetadata', function() {
	    $('#duration').text(get_normalized_time(video.duration))
	    $('#filter-btn').prop("disabled", false);
	});

	// By the time the video has ended, it will be back at starter point
	video.onended = function() {
	    $('#control-stop').click()
	};

	// Play/Pause Button
	$('#control-play').click(function () {
		if (video.paused || video.ended) {
			$('#control-play').find('i').removeClass('fa-play').addClass('fa-pause')
			video.play();
		} else {
			$('#control-play').find('i').removeClass('fa-pause').addClass('fa-play')
			video.pause();
		}
	})

	// Stop Button
	$('#control-stop').click(function () {
		$('#control-play').find('i').removeClass('fa-pause').addClass('fa-play')
		video.pause();
   		video.currentTime = 0;
	})

	// On change on the volume input range
	$('#control-volume-range').on('change', function() { update_volume() })

	// Full Screen Button
	$('#control-expand').click(function () {
		if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
			$('#video-controls').addClass('full-screen');
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen();
			$('#video-controls').addClass('full-screen');
		}
	});

	// Every time that changes the current time of the video
	$('#mainVid').bind('timeupdate', function () {
		$("#actual-progress").slider('value', (video.currentTime / video.duration)*100)
		$('#actual-time').text(get_normalized_time(video.currentTime))
	});


	/*
		Change the language of the subtitles
	*/
	$('#control-esp, #control-pt, #control-no-sub').click(function () {
		$('#collapseLanguage .well .btn').removeClass('active-lan');
		$('#control-'+$(this).attr('lan')).addClass('active-lan');
	})

	// Video time slider
	$("#actual-progress").slider({
		range: "min",
		value: 0,
		min: 0,
		max: 100
    });

	// When you click over the slider, you will be redirected to that specific time
    $("#actual-progress").slider({
		slide: function(event, ui) { video.currentTime = (ui.value * video.duration)/100 }
	});
}

function update_position (value) {
	video.currentTime = (value*video.duration)/10;
}

function update_volume () {
    video.volume = parseFloat(($('#control-volume-range').val()/100)).toFixed(1);
}