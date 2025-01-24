const iconPlayButton = document.getElementById('iconPlayButton');
const audioPlayer = document.getElementById('audioPlayer');

iconPlayButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        iconPlayButton.classList.remove('fa-play');
        iconPlayButton.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        iconPlayButton.classList.remove('fa-pause');
        iconPlayButton.classList.add('fa-play');
    }
});
    