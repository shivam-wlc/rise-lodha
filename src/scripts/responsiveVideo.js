function updateVideoSource() {
	const videoSource = document.getElementById("video-source");
	const video = document.getElementById("responsive-video");

	if (navigator.userAgent.match(/Safari/i)) {
		video.setAttribute("playsinline", "");
	}

	if (window.innerWidth <= 768) {
		videoSource.setAttribute("src", "./src/assessts/videos/vertical.mp4");
	} else {
		videoSource.setAttribute("src", "./src/assessts/videos/horizontal.mp4");
	}
}

export { updateVideoSource };