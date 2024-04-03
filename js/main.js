// Завдання 1
function countdownTimer(durationInSeconds) {
    let remaiTime = durationInSeconds;

    const timerInterval = setInterval(() => {
        if (remaiTime === 30 * 60) {
            console.log("Залишилось менше половини часу!");
        }
        if (remaiTime <= 0) {
            clearInterval(timerInterval);
            console.log("Час вийшов!");
        } else {
            const hours = Math.floor(remaiTime / 3600);
            const minutes = Math.floor((remaiTime % 3600) / 60);
            const seconds = remaiTime % 60;
            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
            
            remaiTime--;
        }
    }, 1000); 
}


const timerSeconds = 60 * 60;

countdownTimer(timerSeconds);

