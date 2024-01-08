function playDrum(soundId) {
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function keyDownHandler(e) {
  const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (keyElement) {
    const soundId = `sound-${e.keyCode}`;
    playDrum(soundId);
    keyElement.classList.add("playing");
  }
}

function keyUpHandler(e) {
  const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (keyElement) {
    keyElement.classList.remove("playing");
  }
}

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
