"use strict";

// Define an object to store the audio elements and their play state
const audioElements = {
  sound1: { audio: new Audio("mp3/once-in-paris.mp3"), playing: false },
  sound2: { audio: new Audio("mp3/beautiful-piano.mp3"), playing: false },
  sound3: { audio: new Audio("mp3/just-relax.mp3"), playing: false },
  sound4: { audio: new Audio("mp3/inside-you.mp3"), playing: false },
  sound5: { audio: new Audio("mp3/relaxing.mp3"), playing: false },
};

let currentSound = null;

// Function to play or pause the sound based on its current state
function toggleSound(buttonId) {
  const audioObj = audioElements[buttonId];
  const button = document.getElementById(buttonId);

  // If another sound is currently playing, pause it
  if (currentSound && currentSound !== buttonId) {
    const currentAudioObj = audioElements[currentSound];
    currentAudioObj.audio.pause();
    currentAudioObj.playing = false;
    document.getElementById(currentSound).innerHTML =
      '<ion-icon name="play-circle-outline"></ion-icon>';
  }

  // Toggle play/pause for the clicked sound
  if (audioObj.playing) {
    audioObj.audio.pause();
    button.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
  } else {
    audioObj.audio.play();
    button.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>';
  }

  // Update the current sound
  if (currentSound === buttonId && !audioObj.playing) {
    currentSound = null;
  } else {
    currentSound = buttonId;
  }

  // Toggle the play state
  audioObj.playing = !audioObj.playing;
}

// Add event listeners to each button
document.getElementById("sound1").addEventListener("click", function () {
  toggleSound("sound1");
});

document.getElementById("sound2").addEventListener("click", function () {
  toggleSound("sound2");
});

document.getElementById("sound3").addEventListener("click", function () {
  toggleSound("sound3");
});

document.getElementById("sound4").addEventListener("click", function () {
  toggleSound("sound4");
});

document.getElementById("sound5").addEventListener("click", function () {
  toggleSound("sound5");
});
