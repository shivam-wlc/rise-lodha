function updateVideoSource() {
  const videoSource = document.getElementById("video-source");
  const video = document.getElementById("responsive-video");

  function loadVideo() {
    if (navigator.userAgent.match(/Safari/i)) {
      video.setAttribute("playsinline", "");
    }

    if (window.innerWidth <= 768) {
      videoSource.setAttribute("src", "./src/assessts/videos/vertical.mp4");
    } else {
      videoSource.setAttribute("src", "./src/assessts/videos/horizontal.mp4");
    }
    video.load();
  }
  window.onload = loadVideo;
  //   const video = document.getElementById("responsive-video");
  //   const videoSource = document.getElementById("video-source");

  //   function loadVideo() {
  //     // Dynamically set the video source based on screen width
  //     if (window.innerWidth <= 768) {
  //       videoSource.setAttribute("src", "./src/assessts/videos/vertical.mp4");
  //     } else {
  //       videoSource.setAttribute("src", "./src/assessts/videos/horizontal.mp4");
  //     }

  //     // Reload the video with the updated source
  //     video.load();
  //   }

  //   // Set the video source after the website fully loads
  //   window.onload = loadVideo;
}

export { updateVideoSource };
