


function playSound(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // Stops the function from running all together
 
    if (!audio) return;
    // rewind the audio to the start.
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
};

function removeTransition(e) {
// skips  it if it is not a transform.
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);