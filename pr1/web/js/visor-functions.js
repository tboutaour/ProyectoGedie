var last_volume = 0

function init_video_controls () {
	myVideo.addEventListener('loadedmetadata', function() {

	    $('#filter-btn').prop("disabled", false);
	});

	// By the time the video has ended, it will be back at starter point
	myVideo.onended = function() {
	    $('#control-stop').click()
	};

	// Play/Pause Button
	$('#control-play').click(function () {
		if (myVideo.paused || myVideo.ended) {
			$('#control-play').find('i').removeClass('fa-play').addClass('fa-pause')
			myVideo.play();
		} else {
			$('#control-play').find('i').removeClass('fa-pause').addClass('fa-play')
			myVideo.pause();
		}
	})

	// Stop Button
	$('#control-stop').click(function () {
		$('#control-play').find('i').removeClass('fa-pause').addClass('fa-play')
		myVideo.pause();
   		myVideo.currentTime = 0;
	})

	// On change on the volume input range
	$('#control-volume-range').on('change', function() { update_volume() })

	// Full Screen Button
	$('#control-expand').click(function () {
		if (myVideo.mozRequestFullScreen) {
			myVideo.mozRequestFullScreen();
			$('#myVideo-controls').addClass('full-screen');
		} else if (myVideo.webkitRequestFullScreen) {
			myVideo.webkitRequestFullScreen();
			$('#myVideo-controls').addClass('full-screen');
		}
	});
	// Every time that changes the current time of the video
	$('#mainVid').bind('timeupdate', function () {
		$("#actual-progress").slider('value', (myVideo.currentTime / myVideo.duration)*100)
	});

	/*
		Change the language of the subtitles
	*/
	$('#control-eng, #control-pt, #control-no-sub').click(function () {
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
		slide: function(event, ui) { myVideo.currentTime = (ui.value * myVideo.duration)/100 }
	});
}

function update_position (value) {
	myVideo.currentTime = (value*myVideo.duration)/10;
}

function update_volume () {
    myVideo.volume = parseFloat(($('#control-volume-range').val()/100)).toFixed(1);
}