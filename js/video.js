var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.95 * video.playbackRate 
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.05 * video.playbackRate 
	console.log("Speed: " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
		if (video.currentTime < video.duration - 15) {
			video.currentTime += 15;
			console.log("New location " + video.currentTime)
		}
		else {
			video.currentTime = 0;
			console.log("New location " + video.currentTime)
		}

	});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	} else {
		console.log("Mute");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider/100;
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.addClass("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

