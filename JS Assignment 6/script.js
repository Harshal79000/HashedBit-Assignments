let timer;
let startTime;
let isPaused = false;
let isRunning = false;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTime() {
    const currentTime = document.getElementById('time');
    const elapsedTime = Math.floor((Date.now() - startTime.getTime()) / 1000);
    currentTime.textContent = formatTime(elapsedTime);
}

function start() {
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');

    if (!isRunning) {
        startTime = new Date();
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        stopButton.disabled = false;
    }
}

function pause() {
    const pauseButton = document.getElementById('pause');

    if (isRunning) {
        clearInterval(timer);
        isPaused = true;
        isRunning = false;
        pauseButton.textContent = 'Continue';
    } else {
        // Reset startTime to the current time minus the elapsed time
        startTime = new Date(Date.now() - (Date.now() - startTime.getTime()));
        timer = setInterval(updateTime, 1000);
        isPaused = false;
        isRunning = true;
        pauseButton.textContent = 'Pause';
    }
}

function stop() {
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');

    clearInterval(timer);
    document.getElementById('time').textContent = '00:00:00';
    isPaused = false;
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;
}
