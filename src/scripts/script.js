document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.fa-play');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const parentButton = this.closest('button');
            parentButton.innerHTML = '<i class="fas fa-pause"></i>';
            
            setTimeout(() => {
                parentButton.innerHTML = '<i class="fas fa-play"></i>';
            }, 3000);
        });
    });

    const mainPlayButton = document.querySelector('.player-controls .fa-play');
    if(mainPlayButton) {
        mainPlayButton.addEventListener('click', function() {
            const playerButton = this.closest('button');
            if(this.classList.contains('fa-play')) {
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
                playerButton.classList.add('playing');
            } else {
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
                playerButton.classList.remove('playing');
            }
        });
    }
});

const volumeDot = document.querySelector('.volume-dot');
const volumeSlider = document.querySelector('.volume-slider');
const volumeContainer = document.querySelector('.volume-slider-container');
let isDragging = false;

function setVolumePosition(clientX) {
    const containerRect = volumeContainer.getBoundingClientRect();
    let percentage = (clientX - containerRect.left) / containerRect.width;

    percentage = Math.max(0, Math.min(1, percentage));

    volumeSlider.style.width = `${percentage * 100}%`;
    volumeDot.style.left = `${percentage * 100}%`;
}

volumeDot.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        setVolumePosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

volumeContainer.addEventListener('click', (e) => {
    setVolumePosition(e.clientX);
});

function redirectHome() {
    window.location.href = "./index.html";
}