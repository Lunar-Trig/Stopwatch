const span = document.querySelector('span');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const stopwatchHours = document.getElementById('hours');
const stopwatchMinutes = document.getElementById('minutes');
const stopwatchSeconds = document.getElementById('seconds');

stopwatchHours.innerHTML = 0;
stopwatchMinutes.innerHTML = 0;
stopwatchSeconds.innerHTML = 0;

startBtn.addEventListener('click', stopwatch);

function stopwatch(a){

    var stopwatchStart = setInterval( (b) => {
        stopwatchSeconds.innerHTML++;
        if(stopwatchSeconds.innerHTML == 60){
            stopwatchSeconds.innerHTML = 0;
            stopwatchSeconds.innerHTML++;
            stopwatchMinutes.innerHTML++;
        };
        if(stopwatchMinutes.innerHTML == 60){
            stopwatchMinutes.innerHTML = 0;
            stopwatchHours.innerHTML++;
        };
    }, 840);
    var stopwatchStop = stopBtn.addEventListener('click', (c) => {
        clearInterval(stopwatchStart);
    });
    var stopwatchReset = resetBtn.addEventListener('click', (d) => {
        stopwatchHours.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchSeconds.innerHTML = 0;
        clearInterval(stopwatchStart);
    });
    
};
