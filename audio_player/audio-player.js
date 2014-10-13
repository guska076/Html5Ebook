var mediaPlayer, playPauseBtn, progressBar;

function initialiseMediaPlayer() {
	mediaPlayer = document.getElementById('media-audio');

	playPauseBtn = $('#play-pause-button');
	progressBar = $('#progress-bar');

	mediaPlayer.controls = false;

	mediaPlayer.volume = 0.6;
	$('#volume-up').on('click',function() {
		changeVolume(1);
		return false;
	});
	$('#volume-down').on('click',function() {
		changeVolume(0);
		return false;
	});
	$('#audio-controls #play-pause-button').on('click',function() {
		togglePlayPause();
		return false;
	});

	mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
	
	mediaPlayer.addEventListener('play', function() {
		playPauseBtn.removeClass('play');
		playPauseBtn.html('Pause');
		playPauseBtn.attr('title','pause');
		playPauseBtn.addClass('pause');
	}, false);
	mediaPlayer.addEventListener('pause', function() {
		playPauseBtn.removeClass('pause');
		playPauseBtn.html('Play');
		playPauseBtn.attr('title','play');
		playPauseBtn.addClass('play');
	}, false);
}

function togglePlayPause() {
	if (mediaPlayer.paused || mediaPlayer.ended) {
		playPauseBtn.removeClass('play');
		playPauseBtn.html('Pause');
		playPauseBtn.addClass('pause');
		mediaPlayer.play();
	}
	else {
		playPauseBtn.removeClass('pause');
		playPauseBtn.html('Play');
		playPauseBtn.addClass('play');
		mediaPlayer.pause();
	}
}

function updateProgressBar() {
	var percentage = Math.ceil((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
	progressBar.attr('value', percentage);
	progressBar.html(percentage + '% played');
}

function changeVolume(direction) {
	if (direction === 1) mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
	else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
	mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

$(document).ready(function() {
	initialiseMediaPlayer();
});