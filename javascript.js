let minutes = 25;
let seconds = 0;
let timer;
let initialized = false;


function countdown() {
    if (seconds < 10){
        console.log(minutes + ":0" + seconds);
    }
    else{
        console.log(minutes + ":" + seconds);
    }
    if(seconds == 0){
        minutes--;
        seconds = 59;
    }
    else{
        seconds--;
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