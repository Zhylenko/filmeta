window.onload = function(){

	//Get elements
	let player = document.getElementsByClassName("video-player")[0];
	if(player != null){
	let video = player.getElementsByTagName("video")[0];
	let playerControls = player.getElementsByClassName("player-controls")[0];
	let bg_Control = playerControls.getElementsByClassName("player-bg-control")[0];
	let control_Bar = player.getElementsByClassName("control-bar")[0];
	let play_Buttons = player.getElementsByClassName("player-play-btn");
	let videoTimeBlock = control_Bar.getElementsByClassName("player-time-block")[0];
	let videoTime = videoTimeBlock.getElementsByTagName("p")[0];
	let progress_Bar = control_Bar.getElementsByClassName("player-progress-bar")[0];
	let video_Progress = progress_Bar.getElementsByClassName("player-progress")[0];
	let fullscreen_Button = control_Bar.getElementsByClassName("player-fullscreen-btn")[0];


	//Hide/show controls
	let timeoutHideControls, hideDelay = 2000;
	player.addEventListener('mousemove', function(){
		//Show bar
		control_Bar.style.opacity = 1;
		player.style.cursor = 'auto';

		//Update timeout
		clearTimeout(timeoutHideControls);
		timeoutHideControls = setTimeout(hideControlBar, hideDelay);
	});


	//Play/Stop
	play_Buttons[1].addEventListener("click", function(){
		PlayStopVideo();
	});
	bg_Control.addEventListener("click", function(){
		PlayStopVideo();
	});

	video.addEventListener("pause", setPlayBtn);
	video.addEventListener("playing", setStopBtn);


	//Timeupdate
	video.addEventListener("timeupdate", function(){
		progress_Bar_Func(video.currentTime);
		updateVideoTime();
	});
	//Set progress duration
	video.addEventListener("canplay", function(){
		video_Progress.max = video.duration;
	});
	//If video ends
	video.addEventListener("ended", function(){
		setTimeVideo(0);
	});


	//Keyboard events
	document.addEventListener('keydown', function(event) {
		switch(event.code){
			case ('ArrowRight'):
	    		setTimeVideo(video.currentTime + 5);
				break;
			case ('ArrowLeft'):
	    		setTimeVideo(video.currentTime - 5);
				break;
			case ('Space'):
				event.preventDefault();
	    		PlayStopVideo();
				break;
			case ('KeyF'):
	    		Fullscreen();
				break;
		}

	});


	//Progress bar
	video_Progress.oninput = function(){
		let selected = this.value;
		setTimeVideo(selected);
	};


	//Fullscreen
	fullscreen_Button.addEventListener("click", function(){
		Fullscreen();
	});


	//Functions
	function hideControlBar(){
		control_Bar.style.opacity = 0;
		player.style.cursor = 'none';
	}

	function PlayStopVideo(){
		if(video.paused){
			setStopBtn();
			video.play();
		}else{
			setPlayBtn();
			video.pause();
		}
	}

	function setPlayBtn(){
		for(let i = 0; i < play_Buttons.length; i++){
			play_Buttons[i].classList.remove("stop");
			play_Buttons[i].classList.add("play");
		}
	}

	function setStopBtn(){
		for(let i = 0; i < play_Buttons.length; i++){
			play_Buttons[i].classList.remove("play");
			play_Buttons[i].classList.add("stop");
		}
	}

	function setTimeVideo(time){
		time = Math.floor(time);
		progress_Bar_Func(time);
		video.currentTime = time;
	}

	function updateVideoTime(){
		let durationVideo = video.duration;
		let currentTime = video_Progress.value;

		let current = [], duration = [];

		//Convert seconds to H:i:s
		current[0] = Math.floor(currentTime / (60 * 60)).toString();
		current[1] = Math.floor((currentTime / 60) % 60).toString();
		current[2] = Math.floor(currentTime % 60).toString();
		//If only one number
		for(let i = 0; i < current.length; i++){
			if(current[i].length < 2){
				current[i] = "0" + current[i];
			}
		}

		duration[0] = Math.floor(durationVideo / (60 * 60)).toString();
		duration[1] = Math.floor((durationVideo / 60) % 60).toString();
		duration[2] = Math.floor(durationVideo % 60).toString();
		//If only one number
		for(let i = 0; i < duration.length; i++){
			if(duration[i].length < 2){
				duration[i] = "0" + duration[i];
			}
		}
		let time = current[0] + ":" + current[1] + ":" + current[2] + " / " + duration[0] + ":" + duration[1] + ":" + duration[2];
		console.log(time);
		videoTime.innerHTML = time;
	}

	function progress_Bar_Func(value){
		video_Progress.value = value;
		let pos = value / video.duration;
		video_Progress.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + pos + ', #30D5C8), '
                + 'color-stop(' + pos + ', #464451)'
                + ')';
 	};

	function Fullscreen(){
		//Open fullscreen
		if(player.requestFullScreen) {
		    player.requestFullScreen();
		} else if(player.mozRequestFullScreen) {
		    player.mozRequestFullScreen();
		} else if(player.webkitRequestFullScreen) {
		    player.webkitRequestFullScreen();
		}
		//Exit fullscreen
		if(document.cancelFullScreen) {
		    document.cancelFullScreen();
		} else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
		    document.webkitCancelFullScreen();
		}
	}
	}
};