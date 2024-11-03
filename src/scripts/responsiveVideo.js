// / for video player
const videoSource = document.getElementById("video-source");
function updateVideoSource() {
  if (window.innerWidth <= 768) {
    videoSource.src = "./src/assessts/videos/vertical.mp4";
  } else {
    videoSource.src = "./src/assessts/videos/horizontal.mp4";
  }
  document.getElementById("responsive-video").load(); //some time it the source is updating the source and some time not. So dont remove it shivame sir
}
updateVideoSource();
window.addEventListener("resize", updateVideoSource);
