(function (){
    var display = document.getElementsByClassName('display')[0];
    var startBtn = document.getElementsByClassName('start')[0];
    var clearBtn = document.getElementsByClassName('clear')[0];
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var timerState = 'stop';
    var interval;
    var isTimerRunning = false;

    var clearData = function(){
        isTimerRunning = false;
        clearInterval(interval);
        hours = minutes = seconds = milliseconds = 0;
        timerState = 'stop';
        display.innerText = '00:00:00.000';
        startBtn.innerText = 'Start';
    };

    var checkForDoubleZero = function(num){
        num = Math.floor(num);

        if(num < 10){
            num = '00' + num;
        } else if (num < 100){
            num = '0' + num;
        }

        return num;
    };

    var checkForZero = function(num){
        num = Math.floor(num);

        if(num < 10){
            num = '0' + num;
        }

        return num;
    };

    var displayUpdate = function(){
        if(isTimerRunning){
            milliseconds = milliseconds + 10;
            millisecondsUI = checkForDoubleZero(milliseconds % 1000);
            seconds = checkForZero(milliseconds / 1000);
            minutes = checkForZero(seconds / 60);
            hours = checkForZero(minutes / 60);

            display.innerText = '' + hours + ':' + minutes + ':' + seconds + '.' + millisecondsUI;
        }
    }

    var toggleRunner = function(){

        if(timerState === 'stop'){

            startBtn.innerText = 'Pause';
            isTimerRunning = true;
            interval = setInterval(displayUpdate, 10);
            timerState = 'run';

        } else if(timerState === 'paused'){

            startBtn.innerText = 'Pause';
            isTimerRunning = true;
            timerState = 'run';

        } else if(timerState === 'run'){

            startBtn.innerText = 'Continue';
            isTimerRunning = false;
            timerState = 'paused';
        }
    };


    startBtn.addEventListener('click', toggleRunner);
    clearBtn.addEventListener('click', clearData);
}())
