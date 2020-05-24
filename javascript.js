let workInterval = 2;
let restInterval = 1;
let minutes = 0;
let seconds = 0;
let timer;
let initialized = false;
let stateWork = true;


function countdown() {
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
    console.log(timeString);
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
            stateWork = false;
        }
        else{
            work();
            stateWork = true;
        }
    }
}

function stopTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    timer = setInterval(countdown, 1000);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 25;
}

function startTimer(mins, secs) {
    if(initialized){
        stopTimer();
    } else {
        initialized = true;
    }
    minutes = mins;
    seconds = secs;
    timer = setInterval(countdown, 1000);
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
    workInterval = n;
}

function changeRest(n) {
    restInterval = n;
}