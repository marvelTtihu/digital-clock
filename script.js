const theClock = document.getElementById("the-clock");
const onOffButton = document.getElementById("on-off-button");   

let clockInterval = null;
let isRunning = false;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    theClock.textContent = `${hours}:${minutes}`;
}

function startClock() {
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
    isRunning = true;
    onOffButton.classList.add("active");
}

function stopClock() {
    clearInterval(clockInterval);
    clockInterval = null;   
    isRunning = false;
    theClock.textContent = "00:00";
    onOffButton.classList.remove("active");
}

onOffButton.addEventListener("click", () => {
    if (isRunning) {
        stopClock();
    } else 
        startClock();
});

startClock();