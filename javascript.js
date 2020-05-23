let workInterval = 2;
let restInterval = 1;
let minutes = 0;
let seconds = 0;
let timer;
let initialized = false;
let stateWork = true;


function countdown() {
    if (minutes < 10){
        if (seconds < 10){
            console.log("0" + minutes + ":0" + seconds);
        }
        else{
            console.log("0" + minutes + ":" + seconds);
        }
    }
    else{
        if (seconds < 10){
        console.log(minutes + ":0" + seconds);
        }
        else{
            console.log(minutes + ":" + seconds);
        }
    }
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