const musics = [
  {
    artist: "offaflat",
    title: "Ur such a shame x_x",
    audioSrc: "https://pomf2.lain.la/f/8pgtm19n.mp3",
    cover: "https://pomf2.lain.la/f/twpbd5yr.jpg",
  },
  {
    artist: "Caramella Girls",
    title: "Caramelldansen",
    audioSrc: "https://pomf2.lain.la/f/n2gf691i.mp3",
    cover: "https://pomf2.lain.la/f/oqofcvjx.jpg",
  },
  {
    artist: "lexi xoxo",
    title: "PARTY GIRLS",
    audioSrc: "https://pomf2.lain.la/f/fqlwxv4.mp3",
    cover: "https://pomf2.lain.la/f/6npuerak.jpg",
  },
  {
    artist: "disoc8",
    title: "ur the one i want",
    audioSrc: "https://pomf2.lain.la/f/jvk5zic2.mp3",
    cover: "https://pomf2.lain.la/f/9cxuzrax.jpg",
  },
  {
    artist: "creepP",
    title: "She's Homeless - Speed Up Version",
    audioSrc: "https://pomf2.lain.la/f/o24wrjaa.mp3",
    cover: "https://pomf2.lain.la/f/1i08xnpr.jpg",
  },
];

const audio = new Audio();
let currentIndex = 0;
let isPlaying = false;

const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const muteBtn = document.getElementById("muteBtn");
const audioTitle = document.getElementById("audioTitle");
const audioArtist = document.getElementById("audioArtist");
const playlist = document.getElementById("playlist");
const coverImg = document.querySelector(".audioTop img");

function loadSong(index) {
  const song = musics[index];
  audio.src = song.audioSrc;
  audioTitle.textContent = song.title;
  audioArtist.textContent = song.artist;
  coverImg.src = song.cover;
}

playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => {
  isPlaying = true;
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  playIcon.style.display = "inline";
  pauseIcon.style.display = "none";
});

audio.addEventListener("timeupdate", () => {
  seekBar.max = audio.duration || 0;
  seekBar.value = audio.currentTime;

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});

muteBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteBtn.innerHTML = audio.muted ? "🔇" : "🔊";
});

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

musics.forEach((song, index) => {
  const item = document.createElement("button");
  item.textContent = `${song.title} — ${song.artist}`;
  item.addEventListener("click", () => {
    currentIndex = index;
    loadSong(currentIndex);
    audio.play();
  });
  playlist.appendChild(item);
});

// Init
loadSong(currentIndex);
pauseIcon.style.display = "none";
