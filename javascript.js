let workInterval = 25;
let restInterval = 5;
let minutes = 0;
let seconds = 0;
let timer;
let initialized = false;
let stateWork = true;

const countdownInterval = 1000; // in milliseconds
const timerText = document.getElementById("timer-text");
const currInterval = document.getElementById("top-controls");

function countdown() {
    updateTimerText();
    if(seconds == 0){
        minutes--;
        seconds = 59;
    }
    else{
        seconds--;
    }
    if (minutes === 0 && seconds === 0){
        if (stateWork){
            rest();
            currInterval.textContent = "Interval: Break";
            stateWork = false;
        }
        else{
            work();
            currInterval.textContent = "Interval: Session";
            stateWork = true;
        }
    }
}

function updateTimerText() {
    const hours = Math.floor(minutes/60);
    const mins = minutes%60;
    let timeString = "";
    if (hours > 0) {
        timeString = hours + ":";
    }
    if (mins < 10){
        timeString += "0";
    }
    timeString += mins + ":";
    if (seconds < 10){
        timeString += "0";
    }
    timeString += seconds;
    timerText.textContent = timeString;
}

function pauseTimer() {
    clearInterval(timer);
    play.disabled = false;
    pause.disabled = true;
}

function resumeTimer() {
    timer = setInterval(countdown, countdownInterval);
}

function resetTimer() {
    currInterval.textContent = "Interval: Session";
    pauseTimer();
    changeWork(25);
    changeRest(5);
    initialized = false;
}

function stopTimer() {
    currInterval.textContent = "Interval: Session";
    pauseTimer();
    seconds = 0;
    minutes = workInterval;
    initialized = false;
    updateTimerText();
    sessionUp.disabled = false;
    sessionDown.disabled = false;
    breakUp.disabled = false;
    breakDown.disabled = false;
    breakText.disabled = false;
    sessionText.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

function startTimer(mins, secs) {
    if(initialized){
        clearInterval(timer);
    } else {
        initialized = true;
    }
    minutes = mins;
    seconds = secs;
    timer = setInterval(countdown, countdownInterval);
}

function work() {
    stateWork = true;
    startTimer(workInterval, 0);
}

function rest() {
    stateWork = false;
    startTimer(restInterval, 0);
}

function changeWork(n) {
    if ((n > 0) && (n <= 300)){
        workInterval = n;
        minutes = workInterval;
        updateTimerText();
    }
    sessionText.value = workInterval;
    console.log(workInterval);
}

function changeRest(n) {
    if ((n > 0) && (n <= 300)){
        restInterval = n;
    }
    breakText.value = restInterval;
    console.log(restInterval);
}

const sessionText = document.getElementById("sessionText");
const breakText = document.getElementById("breakText");

sessionText.addEventListener("change", (e) => {
    changeWork(Number(sessionText.value));
}); 

breakText.addEventListener("change", (e) => {
    changeRest(Number(breakText.value));
});

function incrementSession() {
    changeWork(workInterval+1);
}

function decrementSession() {
    changeWork(workInterval-1);
}

function incrementBreak() {
    changeRest(restInterval+1);
}

function decrementBreak() {
    changeRest(restInterval-1);
}

function playTimer() {
    if (initialized){
        resumeTimer();
    } else {
        startTimer(workInterval, 0);
    }
    play.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
    sessionUp.disabled = true;
    sessionDown.disabled = true;
    breakUp.disabled = true;
    breakDown.disabled = true;
    breakText.disabled = true;
    sessionText.disabled = true;
}

const sessionUp = document.getElementById("sessionUp");
const sessionDown = document.getElementById("sessionDown");
const breakUp = document.getElementById("breakUp");
const breakDown = document.getElementById("breakDown");

sessionUp.addEventListener("click", incrementSession);
sessionDown.addEventListener("click", decrementSession);
breakUp.addEventListener("click", incrementBreak);
breakDown.addEventListener("click", decrementBreak);

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

play.addEventListener("click", playTimer);
pause.addEventListener("click", pauseTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

pause.disabled = true;
stop.disabled = true;
reset.disabled = true;
