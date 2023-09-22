let isPlay = false;
let playNum = 0;
let playList = ['./assets/audio/beyonce (1).mp3', './assets/audio/dontstartnow.mp3', './assets/audio/Cheek_to_Cheek.mp3', './assets/audio/Go_Down_Moses.mp3', './assets/audio/What_A_Wonderful_World.mp3'];
let coverList = ['./assets/images/lemonade.png', './assets/images/dontstartnow.png', './assets/images/cheek-to-cheek.png', './assets/images/go_down.png', './assets/images/wonderfull_world.png'];
let singerList = ['Beyonce', 'Dua Lipa', 'Louis Armstrong', 'Louis Armstrong', 'Louis Armstrong'];
let titleList =['Don\'t hurt yourself', 'Don\'t stop now', 'Cheek to Cheek', 'Go Down Moses', 'What A Wonderful World'];

const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const background = document.querySelector('.background');
const cover = document.querySelector('.audio__cover img');
const singer = document.querySelector('.singer');
const song = document.querySelector('.song');
const songLength = document.querySelector('.audio-length');
const progressBar = document.querySelector('.progressbar');
const currentTime = document.querySelector('.curent');
const timeline = document.querySelector('.timeline');


//play
playButton.addEventListener('click', function playPause() {
  if (audio.paused) {
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
    playNum = playList.length - 1; //
  } else if (playNum > (playList.length - 1)) {
    playNum = 0;
  }
  audio.setAttribute('src', playList[playNum]);
  background.setAttribute('src', coverList[playNum]);
  cover.setAttribute('src', coverList[playNum]);
  singer.textContent = singerList[playNum];
  song.textContent = titleList[playNum];
    // audio.currentTime = 0;
    audio.play();
    // isPlay = !isPlay;
    playButton.classList.add('pause');
  });

//next
nextButton.addEventListener('click', function next() {
  playNum = playNum + 1;
  if (playNum < 0) {
    playNum = playList.length - 1;
  } else if (playNum > (playList.length - 1)) {
    playNum = 0;
  }
  audio.setAttribute('src', playList[playNum]);
  background.setAttribute('src', coverList[playNum]);
  cover.setAttribute('src', coverList[playNum]);
  singer.textContent = singerList[playNum];
  song.textContent = titleList[playNum];
    // audio.currentTime = 0;
    audio.play();
    // isPlay = isPlay;
    playButton.classList.add('pause');
});

//timecode
function formatSecondsToTime(sec) {
  let minutes = Math.floor(sec/60);
  let seconds = Math.floor(sec - (minutes * 60));

  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds  = "0" + seconds;
  }

  return minutes + ':' + seconds;
}
audio.addEventListener("loadeddata", () => {
    songLength.textContent = formatSecondsToTime(audio.duration);
  },
  false
);
setInterval(() => {
  progressBar.style.left = (audio.currentTime / audio.duration * 100 + "%");
  currentTime.textContent = formatSecondsToTime(audio.currentTime);
}, 1000);

//timeline change
timeline.addEventListener("click", (e) => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeChange = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeChange;
}, false);