let isPlay = false;
let playNum = 0;
let songsList = [];
const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', function playPause() {
  if (!isPlay) {
    // audio.currentTime = 0;
    audio.play();
    playButton.classList.add('pause');
  } else {
    audio.pause();
    playButton.classList.remove('pause');
  }
  isPlay = !isPlay;
});
