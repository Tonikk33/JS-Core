function timer() {
    let seconds = 0;
    let minutes = 0;
    let interval;
    let isRunning = false;
    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(increment, 1000);
        }

        function increment() {
            seconds++;
            if (seconds % 60 === 0) {
                minutes++;
            }
            $('#hours').text(('0' + Math.floor(minutes / 60)).slice(-2));
            $('#minutes').text(('0' + (minutes % 60)).slice(-2));
            $('#seconds').text(('0' + (seconds % 60)).slice(-2));
        }
    }

    function stopTimer() {
        isRunning = false;
        clearInterval(interval);
    }
}
