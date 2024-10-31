// window.addEventListener("load", function () {
//   const videoElement = document.getElementById("responsive-video");
//   const videoSource = document.getElementById("video-source");

//   function setVideoSource() {
//     if (window.innerWidth <= 768) {
//       // Mobile screen (portrait video)
//       console.log("movile screens");
//       videoSource.src =
//         "../assessts/videos/-2024_100089LOD_Rise Preschool- Video for Website vertical.mp4"; // Replace with your vertical video URL
//     } else {
//       console.log("Desktop screens");

//       // Larger screens like laptops (landscape video)
//       videoSource.src =
//         "../assessts/videos/-2024_100089LOD_Rise Preschool- Video for Website vertical.mp4"; // Replace with your horizontal video URL
//     }
//     videoElement.load(); // Reload the video with the new source
//   }

//   console.log("video source", videoSource.src);

//   // Initial check
//   setVideoSource();

//   // Re-check if the screen is resized
//   window.addEventListener("resize", setVideoSource);
// });

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
