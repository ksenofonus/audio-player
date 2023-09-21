let isPlay = false;
let playNum = 0;
let songsList = [];
const audio = document.querySelector('audio');
const playButton = document.querySelector('.play');
playButton.addEventListener('click', function playPause() {
  if (!isPlay) {
    // audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
  isPlay = !isPlay;
});

// playButton.addEventListener('click', () => console.log('click'));