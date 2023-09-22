let isPlay = false;
let playNum = 0;
let playList = ['./assets/audio/beyonce (1).mp3', './assets/audio/dontstartnow.mp3'];
const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

//play
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

//prev
prevButton.addEventListener('click', function prev() {
  playNum = playNum - 1;
  if (playNum < 0) {
    playNum = 1; //playList.length - 1
  } else if (playNum > 1) {
    playNum = 0;
  }
  audio.setAttribute('src', playList[playNum]);
  // if (!isPlay) {
    // audio.currentTime = 0;
    audio.play();
    isPlay = !isPlay;
    playButton.classList.add('pause');
  // }
});

//next
nextButton.addEventListener('click', function next() {
  playNum = playNum + 1;
  if (playNum < 0) {
    playNum = 1;
  } else if (playNum > 1) {
    playNum = 0;
  }
  audio.setAttribute('src', playList[playNum]);
  // if (!isPlay) {
    // audio.currentTime = 0;
    audio.play();
    isPlay = !isPlay;
    playButton.classList.add('pause');
  // }
});
