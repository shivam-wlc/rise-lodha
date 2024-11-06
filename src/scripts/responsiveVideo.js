function updateVideoSource() {
	const videoSource = document.getElementById("video-source");

	if (window.innerWidth <= 768) {
		videoSource.setAttribute("src", "./src/assessts/videos/vertical.mp4");
	} else {
		videoSource.setAttribute("src", "./src/assessts/videos/horizontal.mp4");
	}
	document.getElementById("responsive-video").load(); //some time it the source is updating the source and some time not. So dont remove it shivame sir
}

document.addEventListener("DOMContentLoaded", (event) => {
	updateVideoSource();
	event.preventDefault();
	window.addEventListener("resize", updateVideoSource);
});
