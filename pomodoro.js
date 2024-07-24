let startingMinutes = 25;
let time = startingMinutes * 60;
let startCount; // Variable to hold the interval ID

const countDown = document.getElementById("TickTime");
const date=document.getElementById("date")
const currentDate= new Date();
date.innerHTML=currentDate

function updateDate(){
    const currentDate= new Date();
    date.innerHTML=currentDate
}
setInterval(updateDate,86400000)
function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `${minutes} : ${seconds}`;

    if (time > 0) {
        time--;
    } else {
        clearInterval(startCount); // Stop the countdown when it reaches zero
    }
}

// Event listeners for buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const PomodoroButton = document.getElementById("Pomodoro");
const shortBreakButton=document.getElementById("shortbreak")
const longbreakButton=document.getElementById("longbreak")

startButton.addEventListener("click", function() {
    // Clear any existing interval to prevent multiple intervals running simultaneously
    clearInterval(startCount);
    // Start the countdown
    startCount = setInterval(updateCountDown, 1000);
});

stopButton.addEventListener("click", function() {
    // Stop the countdown
    clearInterval(startCount);
});

resetButton.addEventListener("click", function() {
    // Stop the countdown
    clearInterval(startCount);
    // Reset time to startingMinutes
    time = startingMinutes * 60;
    // Update the display
    updateCountDown();
});

shortBreakButton.addEventListener("click",function(){
    countDown.innerHTML='5 : 00'
    startingMinutes=5;
    time=startingMinutes*60;

    clearInterval(startCount)

    // startCount=setInterval(updateCountDown,1000)

})

PomodoroButton.addEventListener("click",function(){
    countDown.innerHTML='25 : 00'
    startingMinutes=25;
    time=startingMinutes*60;
    clearInterval(startCount);
})

shortBreakButton.addEventListener("click",function(){
    countDown.innerHTML='15 : 00'
    startingMinutes=15;
    time=startingMinutes*60;

    clearInterval(startCount)

    // startCount=setInterval(updateCountDown,1000)

})

